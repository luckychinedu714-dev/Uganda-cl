/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] px-4 py-10 sm:px-8 sm:py-16 lg:py-20">
      <main className="mx-auto max-w-3xl bg-[#141414] border border-[#262626] rounded-xl px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <article>
          <header className="pb-8 border-b border-[#262626]">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#fafafa] text-balance">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-[#a3a3a3] tabular-nums">
              Last updated: 25 November 2026
            </p>
            <p className="mt-6 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
              OCAASTORE (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect when you place an order through our website or our Facebook and Instagram order forms, and how we use it.
            </p>
          </header>

          <div className="divide-y divide-[#262626]">
            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                Information we collect
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                When you submit an order form, we collect:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#737373] text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                <li>Your full name</li>
                <li>Your phone number and WhatsApp number</li>
                <li>Your delivery address and district</li>
                <li>The package you choose</li>
              </ul>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                How we use your information
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                We use your information only to:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#737373] text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                <li>Call or message you to confirm your order</li>
                <li>Deliver your order to you</li>
                <li>Contact you about your delivery or any problem with it</li>
                <li>Improve our service and handle customer questions</li>
              </ul>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                Sharing your information
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                We do not sell your personal information. We share it only with the people who need it to complete your order, such as our delivery staff and delivery partners. Meta (Facebook and Instagram) also processes form submissions made through its platforms, under its own privacy policy.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                How long we keep your information
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                We keep your information for as long as needed to complete your order and handle any follow-up, and for as long as the law requires.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                Keeping your information safe
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                We take reasonable steps to protect your information from loss, misuse or unauthorised access, and we limit access to the team members who handle orders.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                Your rights
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                You can ask us at any time to see the information we hold about you, correct it, or delete it. You can also ask us to stop contacting you. To do so, email us at the address below.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                Changes to this policy
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d4d4d4] tracking-[0.01em]">
                We may update this policy from time to time. The latest version will always be on this page, with the date at the top.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#fafafa]">
                Contact us
              </h2>
              <address className="mt-3 not-italic text-base leading-7 text-[#d4d4d4] tracking-[0.01em] space-y-1">
                <p className="font-medium text-[#fafafa]">OCAASTORE</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:Billionairemind397@gmail.com"
                    className="text-[#fafafa] underline underline-offset-4 decoration-[#525252] hover:decoration-[#fafafa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fafafa] rounded-xs"
                  >
                    Billionairemind397@gmail.com
                  </a>
                </p>
              </address>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
