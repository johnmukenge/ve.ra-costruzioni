export type LeadForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function normalizePhone(phone: string) {
  return phone.replace(/\s+/g, "").replace(/[^\d+]/g, "");
}

export function buildLeadSummary(lead: LeadForm) {
  return `${lead.name} | ${lead.email} | ${normalizePhone(lead.phone)} | ${lead.message.slice(0, 80)}`;
}
