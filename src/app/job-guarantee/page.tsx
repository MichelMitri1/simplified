import LegalDocument from "@/components/legal/LegalDocument";

export default function JobGuaranteePage() {
  return (
    <LegalDocument title="How The Job Guarantee Works">
      <h2>Terms & Conditions of the Job Guarantee</h2>

      <p>
        Our Job Guarantee states that Frontend Simplified will refund tuition to
        students who are not offered a tech job within a year (365 days) of
        starting the program.
      </p>

      <p>To be eligible for a refund, students must:</p>

      <div className="mt-5 space-y-6">
        <p>
          1. Complete all course work and have their portfolio and resume
          approved by a class instructor prior to the start of their job search.
        </p>

        <div>
          <p>
            2. For a period of 6 months (180 days) after starting their job
            search:
          </p>
          <div className="mt-1 space-y-1 pl-8">
            <p>
              a. Apply to at least 30 tech roles per week using our outreach
              methodology
            </p>
            <p>b. Provide documentary proof of their job search activity</p>
          </div>
        </div>

        <p>
          3. Not receive a job offer of at least $60,000 per year (pro rata) for
          a tech role. If you are offered or otherwise earn at least $60,000 per
          year after starting the program, you do not qualify for the refund.
        </p>
      </div>

      <hr />

      <p>
        Although we can not guarantee literal employment, we are confident all
        our hardworking students will secure a job. To apply for a refund,
        students must contact Frontend Simplified at{" "}
        <a href="mailto:info@frontendsimplified.com">
          info@frontendsimplified.com
        </a>{" "}
        within a year of starting the program. You do not qualify for a refund
        if you cannot demonstrate the steps mentioned above.
      </p>

      <hr />
    </LegalDocument>
  );
}
