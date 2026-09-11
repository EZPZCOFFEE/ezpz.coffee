import { redirect } from "next/navigation";

// TODO: Build French pricing page (full translation of /en/pricing).
// For now, redirect to the English version.
export default function TarifsPage() {
  redirect("/en/pricing");
}
