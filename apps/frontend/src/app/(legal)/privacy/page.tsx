import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How the OutOfCow Postiz service collects, uses, and protects personal data.',
};

const sections = [
  {
    title: '1. Who operates this service',
    content: (
      <p>
        This Postiz instance is operated by OutOfCow. Questions or privacy
        requests can be sent to{' '}
        <a
          className="text-[#c4a7ff] underline"
          href="mailto:support@outofcow.com"
        >
          support@outofcow.com
        </a>
        .
      </p>
    ),
  },
  {
    title: '2. Data we process',
    content: (
      <p>
        When you create an account or connect a social media service, we may
        process your name, email address, account and page identifiers, profile
        details, access tokens, scheduled content, uploaded media, publishing
        status, and analytics returned by the connected service. We also process
        limited technical logs needed for security and reliability.
      </p>
    ),
  },
  {
    title: '3. Why we process data',
    content: (
      <p>
        We use this data to authenticate you, connect the accounts you select,
        schedule and publish content at your direction, show publishing results
        and analytics, secure the service, and resolve support issues. We do not
        sell personal data.
      </p>
    ),
  },
  {
    title: '4. Connected platforms and service providers',
    content: (
      <p>
        Data is sent to a connected social platform only when required to carry
        out actions you request. Infrastructure and security providers may
        process limited data on our behalf to operate the service. Each
        connected platform processes data under its own privacy policy.
      </p>
    ),
  },
  {
    title: '5. Retention and security',
    content: (
      <p>
        We retain account and connected-platform data only for as long as needed
        to provide the service, meet security and legal obligations, and
        maintain limited backups. We use access controls, encryption in transit,
        and restricted secret storage to protect account credentials and tokens.
      </p>
    ),
  },
  {
    title: '6. Your choices and rights',
    content: (
      <p>
        You can disconnect a social account from Postiz to stop future access.
        You may also request access, correction, export, restriction, or
        deletion of your personal data by contacting us. We may need to verify
        your identity before completing a request.
      </p>
    ),
  },
  {
    title: '7. Deleting your data',
    content: (
      <p>
        Remove connected channels in Postiz and delete scheduled content you no
        longer want stored. To request deletion of your Postiz account and
        associated personal data, email{' '}
        <a
          className="text-[#c4a7ff] underline"
          href="mailto:support@outofcow.com"
        >
          support@outofcow.com
        </a>{' '}
        from the address used for your account.
      </p>
    ),
  },
  {
    title: '8. Policy updates',
    content: (
      <p>
        We may update this policy when the service or legal requirements change.
        The effective date below identifies the current version.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-5 py-12 sm:px-8 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-2xl border border-[#2b2b2b] bg-[#1a1919] p-6 shadow-2xl sm:p-10">
        <header className="border-b border-[#2b2b2b] pb-8">
          <div className="mb-5 flex items-center gap-3">
            {/* A native image keeps this public legal page independent of app state. */}
            <img
              src="/outofcow-postiz-meta-icon.png"
              alt="OutOfCow astronaut cow"
              className="h-14 w-14 rounded-xl"
            />
            <div>
              <p className="text-sm font-medium text-[#c4a7ff]">
                OutOfCow Postiz
              </p>
              <p className="text-sm text-[#a8a8a8]">Social media management</p>
            </div>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#a8a8a8]">
            Effective August 10, 2026
          </p>
        </header>

        <div className="space-y-8 pt-8 text-[15px] leading-7 text-[#dedede]">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 text-lg font-semibold text-white">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
