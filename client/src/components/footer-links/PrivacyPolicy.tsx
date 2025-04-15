const PrivacyPolicy = () => {
    return (
      <div className="max-w-5xl mx-auto px-4 py-14 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500">
            Privacy Policy 🔒
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Your privacy matters to us. Here’s how Lazeez Diet collects, uses, and protects your personal data.
          </p>
        </div>
  
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">1. Information We Collect</h2>
          <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li><strong>Personal Info:</strong> Name, email, location, and phone (optional).</li>
            <li><strong>Usage Data:</strong> Search history, preferences, and interaction with the platform.</li>
            <li><strong>Cookies:</strong> For analytics and personalized experience.</li>
          </ul>
        </section>
  
        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">2. How We Use Your Info</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We use your data to provide personalized food recommendations, improve services, respond to queries, and send you updates if subscribed.
          </p>
        </section>
  
        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">3. Sharing & Security</h2>
          <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>We <strong>do not</strong> sell or rent your data to third parties.</li>
            <li>Your data is stored securely with modern encryption practices.</li>
            <li>We may share minimal data with trusted service providers for app performance and analytics.</li>
          </ul>
        </section>
  
        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">4. Your Rights</h2>
          <p className="text-gray-600 dark:text-gray-300">
            You have the right to access, update, or delete your data anytime. Just drop us an email and we’ll take care of it.
          </p>
        </section>
  
        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">5. Cookies 🍪</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience. You can choose to accept or refuse cookies through your browser settings.
          </p>
        </section>
  
        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">6. Changes to This Policy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may update this Privacy Policy occasionally. Changes will be reflected on this page with the updated date.
          </p>
        </section>
  
        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">7. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            For any privacy-related queries or concerns, reach out to us:
          </p>
          <ul className="ml-6 text-gray-600 dark:text-gray-300 space-y-1">
            <li>📧 Email: privacy@lazeezdiet.com</li>
            <li>📞 Phone: +91 00000 00000</li>
          </ul>
        </section>
  
        {/* Footer */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Last updated: April, 2025
        </p>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  