import React from 'react';
import '../assets/css/Terms.css';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <div className="privacy-policy">
        <h1>Terms and Conditions</h1>
        <p>Last Updated: [25/09/2023]</p>

        <h2>1. Introduction</h2>
        <p>
          These Terms and Conditions ("T&C") govern your use of the Vehicle Service Booking Platform (the "Platform") provided by [Your Company/Organization Name] ("we," "us," or "our"). By using the Platform, you agree to comply with these T&C, so please read them carefully.
        </p>

        <h2>2. Use of the Platform</h2>
        <p>
          a. <strong>Registration:</strong> To use certain features of the Platform, you may be required to register and create an account. You agree to provide accurate and complete information during the registration process and are responsible for maintaining the confidentiality of your account credentials.
        </p>
        <p>
          b. <strong>Booking Services:</strong> Users may schedule appointments and book vehicle maintenance and repair services through the Platform. By using this feature, you agree to abide by the service terms and pricing provided by the service providers.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          a. <strong>Prohibited Activities:</strong> You agree not to use the Platform for any unlawful or harmful purposes, including but not limited to submitting false information, harassing service providers or other users, or violating any applicable laws or regulations. The Platform reserves the right to terminate or block access to any user accounts that violate these T&C.
        </p>
        <p>
          b. <strong>User Content:</strong> Any content you submit to the Platform, including text, images, and videos, must not infringe upon the rights of any third party. By submitting User Content, you grant the Platform a non-exclusive right to use, reproduce, and display such content.
        </p>

        <h2>4. Privacy</h2>
        <p>
          Your use of the Platform is subject to our Privacy Policy, which can be found at [Link to Privacy Policy]. By using the Platform, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          The Platform makes no representations or warranties about the accuracy, reliability, or suitability of the information provided. You use the Platform and its information at your own risk.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, the Platform shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform or any related matters.
        </p>

        <h2>7. Modifications to the T&C</h2>
        <p>
          The Platform reserves the right to modify these T&C at any time. Your continued use of the Platform after such modifications constitutes your acceptance of the updated T&C.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These T&C are governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or related to these T&C shall be subject to the exclusive jurisdiction of the state and federal courts located in [Jurisdiction].
        </p>

        <h2>9. Contact Information</h2>
        <p>
          If you have any questions or concerns about these T&C, please contact us at [Contact Email/Phone].
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
