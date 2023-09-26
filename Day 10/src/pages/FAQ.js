import React from 'react';
import '../assets/css/Terms.css';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';

const FAQs = () => {
  return (
    <>
    <Navbar1/>
      <div className="privacy-policy">
        <h1>Frequently Asked Questions</h1>
        <p>Last Updated: [25/09/2023]</p>

        <h2>1. How do I book a service for my vehicle?</h2>
        <p>
          To book a service, log in to your account, select the type of service you need, choose a service provider, and pick a convenient appointment date and time.
        </p>

        <h2>2. Can I cancel or reschedule my appointment?</h2>
        <p>
          Yes, you can cancel or reschedule your appointment by logging into your account and accessing the booking details. Please review our cancellation policy for any associated fees.
        </p>

        <h2>3. What types of services are offered on the platform?</h2>
        <p>
          Our platform offers a range of vehicle services, including maintenance, repairs, inspections, and more. You can browse service categories to find what you need.
        </p>

        <h2>4. How do I know if a service provider is reliable?</h2>
        <p>
          We vet our service providers and provide customer reviews and ratings to help you make an informed decision. You can also read reviews from other customers.
        </p>

        <h2>5. What payment methods are accepted?</h2>
        <p>
          We accept various payment methods, including credit/debit cards, digital wallets, and online banking. Payment options may vary by service provider.
        </p>

        <h2>6. Is my personal information secure?</h2>
        <p>
          We take data security seriously. Your personal information is encrypted, and we follow industry best practices to protect your data. Please review our privacy policy for more details.
        </p>

        <h2>7. Do I need to create an account to book a service?</h2>
        <p>
          Yes, creating an account helps us streamline your booking experience and allows you to track your service history. It's quick and easy to sign up.
        </p>

        <h2>8. Are there any additional fees or hidden charges?</h2>
        <p>
          We strive for transparency. Service providers may have their pricing, and we display the costs before you confirm your booking. There should be no hidden charges.
        </p>

        <h2>9. How do I contact customer support?</h2>
        <p>
          You can reach our customer support team through the "Contact Us" section of the platform or by emailing [Support Email]. We're here to assist you with any questions or issues.
        </p>

        <h2>10. What should I do in case of an emergency or breakdown?</h2>
        <p>
          In case of an emergency or vehicle breakdown, please contact the service provider directly or call [Emergency Contact Number] for immediate assistance.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default FAQs;
