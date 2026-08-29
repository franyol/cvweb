import marsImage from "@/assets/images/MARS.png";
import { ProjectCard } from "@/components/ProjectCard";

export default function Mars() {
  return (
    <section id="mars">
      <ProjectCard
        title="Marine Acoustic Recording System"
        description="An embedded platform for underwater acoustic data acquisition, combining custom electronics, real-time firmware, and signal processing."
        image={marsImage}
        imageAlt="Marine Acoustic Recording System"
        imagePosition="left"
        content={
          <>
            <p>
              MARS was developed in the context of underwater acoustics research,
              combining embedded systems, electronics, and digital signal
              processing to build a low-cost platform for acoustic experiments.
            </p>

            <p className="mt-4">
              I designed and developed the embedded acquisition system around the
              <strong> ESP32</strong>, using C, ESP-IDF, and FreeRTOS to manage
              concurrent acquisition and processing tasks.
            </p>

            <p className="mt-4">
              The project also involved designing the analog front-end required
              to interface hydrophone signals with the digital acquisition
              system. This included signal conditioning, amplification, biasing,
              and filtering circuits designed and tested using KiCad and LTspice.
            </p>

            <p className="mt-4">
              On the software side, I worked with signal-processing techniques
              including filtering, matched filtering, and spectral analysis,
              using Python and MATLAB to analyze and validate the acquired data.
            </p>

            <p className="mt-4">
              The system evolved from early prototypes into custom PCB designs
              supporting multi-channel acquisition, providing hands-on
              experience across the full path from physical sensing and
              electronics to embedded software and data analysis.
            </p>

            <div className="mt-8">
              <h4 className="font-playfair text-2xl font-semibold">
                Technologies
              </h4>

              <p className="mt-3 text-muted-foreground">
                ESP32 · C · ESP-IDF · FreeRTOS · KiCad · LTspice · Python · MATLAB
                · Signal Processing · PCB Design · Hydrophones · Data Acquisition
              </p>
            </div>
          </>
        }
      />
    </section>
  );
}

