import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport=once: true
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Pricing Plans
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Choose the plan that suits you best.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-3"
        >
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="text-muted-foreground">
                €20/month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="text-muted-foreground">
                €50/month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground">
                €250/month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}
