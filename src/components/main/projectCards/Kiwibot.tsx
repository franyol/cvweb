import kiwibotImage from "@/assets/images/kiwibot.jpg";
import { ProjectCard } from "@/components/ProjectCard";

export default function Kiwibot() {
  return (
    <section id="kiwibot">
      <ProjectCard
        title="Fleet Control Toolkit"
        description="Robotics operations, automation, and software infrastructure for an autonomous delivery fleet."
        image={kiwibotImage}
        imageAlt="Kiwibot autonomous delivery robot"
        content={
          <>
            <p>
              At <strong>Kiwibot</strong>, I worked as a Service Desk Robotics
              Engineer supporting an autonomous robotic fleet. My work involved
              diagnosing failures across both the robots and the software
              systems surrounding them.
            </p>

            <p className="mt-4">
              I developed internal tools to automate repetitive debugging and
              fleet-management workflows, combining telemetry, remote device
              access, and software diagnostics into reproducible workflows.
            </p>

            <p className="mt-4">
              One of these tools was an automated debugging pipeline built in
              Python. It followed a{" "}
              <strong>Trigger → Diagnose → Solution</strong> approach, using SSH
              and robot telemetry to identify and resolve recurring issues. The
              system reduced more than 50% of incoming service tickets through
              automation.
            </p>

            <p className="mt-4">
              I also worked on cloud-based fleet infrastructure, including
              services deployed through GCP Cloud Run, device-management
              workflows, and internal APIs. This gave me practical experience
              with the software infrastructure required to operate autonomous
              systems at scale.
            </p>

            <div className="mt-8">
              <h4 className="font-playfair text-2xl font-semibold">
                Technologies
              </h4>

              <p className="mt-3 text-muted-foreground">
                Python · Next.js · TypeScript · REST APIs · tRPC · GCP Cloud Run
                · Docker · SSH · Telemetry · Linux · Fleet Management
              </p>
            </div>
          </>
        }
      />
    </section>
  );
}
