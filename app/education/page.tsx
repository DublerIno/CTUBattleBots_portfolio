import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Education Kit",
};

export default function EducationPage() {
  return (
    <main id="main-content">
      <PlaceholderPage
        title="EDUCATION KIT"
        subtitle="ANTWEIGHT PLATFORM"
        status="DETAILS COMING SOON"
        variant="education"
      />
    </main>
  );
}
