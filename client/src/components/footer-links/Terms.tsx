const Terms = () => {
    return (
      <div className="max-w-5xl mx-auto px-4 py-14 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500">
            Terms & Conditions 📄
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Welcome to Lazeez Diet! By using our platform, you're agreeing to the following terms. Please read them carefully.
          </p>
        </div>
  
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">
            By accessing and using our services, you agree to comply with and be bound by these terms. If you do not agree, please do not use the platform.
          </p>
        </section>
  
        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">2. User Responsibilities</h2>
          <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>You must provide accurate and complete information when signing up.</li>
            <li>You are responsible for keeping your account and password secure.</li>
            <li>You must not misuse our platform or attempt to interfere with its operations.</li>
          </ul>
        </section>
  
        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">3. Content Ownership</h2>
          <p className="text-gray-600 dark:text-gray-300">
            All recipes, images, and content on Lazeez Diet are either owned by us or used with proper licensing. You may not reproduce or redistribute any part of our platform without written permission.
          </p>
        </section>
  
        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">4. Modifications to Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may update these terms at any time. If we make changes, we'll notify you by updating the date at the bottom of this page or via email if you're subscribed.
          </p>
        </section>
  
        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">5. Termination</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We reserve the right to suspend or terminate your access if you violate any of these terms or misuse the platform in any way.
          </p>
        </section>
  
        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">6. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about these Terms & Conditions, feel free to contact us at:
          </p>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-6">
            <li>📧 Email: support@lazeezdiet.com</li>
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
  
  export default Terms;
  