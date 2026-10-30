import { motion } from "motion/react";
import TextAnimation from "@/components/ui/TextAnimation";

const MemoriesInline = () => {
  return (
    <section aria-label="Memories section" className="py-20">
      <div className="flex flex-col items-center gap-12 py-8 md:py-12 mx-auto w-content-width">
        <div className="flex items-center justify-center px-5 mx-auto w-full max-w-3xl">
          <div className="flex flex-col items-center gap-2 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-1 px-3 py-1 text-sm card rounded"
            >
              {"Event Service"}
            </motion.span>

            <TextAnimation
              text={"Vinanza LLC Personnel"}
              variant={"slide-up"}
              gradientText={true}
              tag="h2"
              className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance text-primary-cta-text"
            />

            <TextAnimation
              text={"Our professional crew in action, delivering reliable service standards to caterers and planners across New York City and Long Island."}
              variant={"slide-up"}
              gradientText={false}
              tag="p"
              className="text-lg md:text-xl leading-snug text-balance text-primary-cta-text"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function MemoriesSection() {
  return (
    <div data-webild-section="memories" data-section="memories" id="memories">
      <MemoriesInline />
    </div>
  );
}
