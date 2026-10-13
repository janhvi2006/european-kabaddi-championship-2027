import { PageHero } from "../components/UI";

export function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Website Information"
        title="Privacy Policy"
        subtitle="Privacy information for the European Kabaddi Championship 2027 demo website."
      />

      <section className="section-pad">
        <div className="container-edge max-w-3xl">
          <div className="card-surface p-6 md:p-8 space-y-5">
            <h2 className="font-display text-xl font-bold uppercase text-gold">
              Demo Website Notice
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              This website is a demonstration project. The contact and ticket
              enquiry forms are simulated and do not send or store the
              information entered.
            </p>
            <h2 className="font-display text-xl font-bold uppercase text-gold">
              Personal Information
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Please do not enter real personal, financial, or confidential
              information into demo forms.
            </p>
            <h2 className="font-display text-xl font-bold uppercase text-gold">
              Before Launch
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              An official privacy policy must be prepared and reviewed before
              this website collects personal information or launches publicly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}