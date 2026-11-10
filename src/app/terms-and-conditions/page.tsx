import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms and Conditions | Reform",
  description: "Review the terms and conditions for using Reform.",
};

export default function TermsAndConditionsPage() {
  return <LegalDocumentPage documentType="terms" />;
}
