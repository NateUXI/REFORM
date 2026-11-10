import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | Reform",
  description: "Learn how Reform collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage documentType="privacy" />;
}
