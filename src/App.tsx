/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#171717] px-4 py-10 sm:px-8 sm:py-16 lg:py-20">
      <main className="mx-auto max-w-3xl bg-white border border-[#e5e5e0] rounded-xl px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <article>
          <header className="pb-8 border-b border-[#ebebea]">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111] text-balance">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-[#666660] tabular-nums">
              Last updated: 25 November 2026
            </p>
            <p className="mt-6 text-base leading-7 text-[#333330]">
              OCAASTORE (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect when you place an order through our website or our Facebook and Instagram order forms, and how we use it.
            </p>
          </header>

          <div className="divide-y divide-[#ebebea]">
            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                Information we collect
              </h2>
              <p className="mt-3 text-base leading-7 text-[#333330]">
                When you submit an order form, we collect:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#8c8c85] text-base leading-7 text-[#333330]">
                <li>Your full name</li>
                <li>Your phone number and WhatsApp number</li>
                <li>Your delivery address and district</li>
                <li>The package you choose</li>
              </ul>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                How we use your information
              </h2>
              <p className="mt-3 text-base leading-7 text-[#333330]">
                We use your information only to:
              </p>
              <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#8c8c85] text-base leading-7 text-[#333330]">
                <li>Call or message you to confirm your order</li>
                <li>Deliver your order to you</li>
                <li>Contact you about your delivery or any problem with it</li>
                <li>Improve our service and handle customer questions</li>
              </ul>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                Sharing your information
              </h2>
              <p className="mt-3 text-base leading-7 text-[#333330]">
                We do not sell your personal information. We share it only with the people who need it to complete your order, such as our delivery staff and delivery partners. Meta (Facebook and Instagram) also processes form submissions made through its platforms, under its own privacy policy.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                How long we keep your information
              </h2>
              <p className="mt-3 text-base leading-7 text-[#333330]">
                We keep your information for as long as needed to complete your order and handle any follow-up, and for as long as the law requires.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                Keeping your information safe
              </h2>
              <p className="mt-3 text-base leading-7 text-[#333330]">
                We take reasonable steps to protect your information from loss, misuse or unauthorised access, and we limit access to the team members who handle orders.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                Your rights
              </h2>
              <p className="mt-3 text-base leading-7 text-[#333330]">
                You can ask us at any time to see the information we hold about you, correct it, or delete it. You can also ask us to stop contacting you. To do so, email us at the address below.
              </p>
            </section>

            <section className="py-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                Changes to this policy
              </h2>
              <p className="mt-3 text-base leading-7 text-[#333330]">
                We may update this policy from time to time. The latest version will always be on this page, with the date at the top.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                Contact us
              </h2>
              <address className="mt-3 not-italic text-base leading-7 text-[#333330] space-y-1">
                <p className="font-medium text-[#111111]">OCAASTORE</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:Billionairemind397@gmail.com"
                    className="text-[#111111] underline underline-offset-4 decoration-[#bdbdb6] hover:decoration-[#111111] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] rounded-xs"
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
