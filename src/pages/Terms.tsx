import { PageHero } from "../components/UI";

export function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Website Information"
        title="Terms of Use"
        subtitle="Terms for using the European Kabaddi Championship 2027 demo website."
      />

      <section className="section-pad">
        <div className="container-edge max-w-3xl">
          <div className="card-surface p-6 md:p-8 space-y-5">
            <h2 className="font-display text-xl font-bold uppercase text-gold">
              Demo Website
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              This website is a demonstration project. Event details, fixtures,
              results, ticket information and other content must be verified
              before being treated as official.
            </p>
            <h2 className="font-display text-xl font-bold uppercase text-gold">
              Forms and Enquiries
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Contact and ticket notification forms are simulations. They do
              not send or store submissions, and no response will be generated
              from a demo submission.
            </p>
            <h2 className="font-display text-xl font-bold uppercase text-gold">
              Before Launch
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Official terms should be reviewed and approved by the event
              organiser before this website is published for public use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}