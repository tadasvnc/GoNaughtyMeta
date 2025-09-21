import { Header } from "@/components/Header";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#590C6B] via-[#3B0645] to-[#28024D]">
      <Header />
      <div className="pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy for CoupleChallenges</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/90 text-lg mb-6">Last updated: November 10, 2024</p>
            
            <p className="text-white/90 mb-8">
              This Privacy Policy outlines how we collect, use, and protect your information when you use our mobile application, CoupleChallenges. By using our app, you consent to the collection and use of your data in accordance with this policy.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Collected</h2>
            <p className="text-white/90 mb-4">
              In order to improve our application, we collect the following information with your consent:
            </p>
            <ul className="text-white/90 mb-6 space-y-2">
              <li><strong>Language and Country:</strong> To enhance user experience.</li>
              <li><strong>Date and Time of Connection:</strong> For usage analysis.</li>
              <li><strong>Game modes and Objects Checked:</strong> To improve app functionality.</li>
              <li><strong>Likes and dislikes feedback on Cards:</strong> We collect feedback on likes and dislikes to improve game quality. We only save the counts, and no user information is stored or linked to those who liked or disliked.</li>
            </ul>
            <p className="text-white/90 mb-6">
              No personal data (e.g., telephone number, email, contacts) is collected.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Collects Third Party</h2>
            <p className="text-white/90 mb-6">
              We use third-party processors to securely handle your payment information. The use of your personal information by these third-party processors is governed by their respective privacy policies. We recommend reviewing their policies as they may differ from this one. CoupleChallenges cannot be held responsible for the actions of these third-party payment processors.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Billing and Payments</h2>
            <p className="text-white/90 mb-6">
              We use third-party processors to securely handle your payment information. The use of your personal information by these third-party processors is governed by their respective privacy policies. We recommend reviewing their policies as they may differ from this one. CoupleChallenges cannot be held responsible for the actions of these third-party payment processors.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Security of Data</h2>
            <p className="text-white/90 mb-6">
              We implement industry-standard security measures to protect your information from unauthorized access and misuse.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">User Rights</h2>
            <p className="text-white/90 mb-6">
              You have the right to access, correct, or delete any personal data we have about you. Please contact us at <a href="mailto:couplchallenges@gmail.com" className="text-pink-400 hover:text-pink-300">couplchallenges@gmail.com</a> for any inquiries.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-white/90 mb-6">
              We may update this Privacy Policy periodically. Any changes will be communicated through the app or via email. We encourage users to regularly check this policy for updates to stay informed about how we are protecting your information.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-white/90 mb-6">
              For questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:couplchallenges@gmail.com" className="text-pink-400 hover:text-pink-300">couplchallenges@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
