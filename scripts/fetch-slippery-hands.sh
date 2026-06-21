#!/usr/bin/env bash
set -e

REPO="https://github.com/franyol/Slippery-Hands.git"
BRANCH="static"
DEST="public/Slippery-Hands"

TMP_DIR="$(mktemp -d)"

echo "📥 Cloning static branch..."
git clone --depth 1 --single-branch --branch "$BRANCH" "$REPO" "$TMP_DIR"

echo "=== CLONED BRANCH ==="
git -C "$TMP_DIR" branch --show-current

echo "=== CLONED COMMIT ==="
git -C "$TMP_DIR" rev-parse HEAD

echo "=== ORIGIN STATIC ==="
git ls-remote "$REPO" "$BRANCH"

echo "📁 Syncing into destination..."
mkdir -p "$DEST"

rsync -av --delete \
  --exclude=".git" \
  --exclude="index.html" \
  "$TMP_DIR/" "$DEST/"

echo "🧠 Setting git identity for CI..."
git config --global user.name "github-actions[bot]"
git config --global user.email "github-actions[bot]@users.noreply.github.com"

echo "📦 Adding changes..."
git add -A

echo "📝 Creating commit..."
git commit -m "Sync static branch into public/Slippery-Hands - $(date '+%Y-%m-%d %H:%M:%S')" || {
  echo "ℹ️ No changes to commit"
  exit 0
}

echo "🚀 Pushing to main..."

git push origin main

echo "🧹 Cleanup..."
rm -rf "$TMP_DIR"

echo "✅ Done!"
