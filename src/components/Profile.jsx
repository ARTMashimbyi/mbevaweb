import React from 'react';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Company Profile</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Introduction</h3>
          <p className="text-gray-600">
            MBEVA CONSTRUCTION is a South Africa company based in Johannesburg which operates nationally. 
            We support Economic Empowerment programs and Endeavour to transfer skills in the historically 
            disadvantaged communities in which we operate.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Vision</h3>
          <p className="text-gray-600">
            To be leading customer driven company that provide comprehensive and innovative solutions 
            that elevates our clients products.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Mission</h3>
          <p className="text-gray-600">
            To become a market leader and at the same time be committed to meeting customer's needs 
            through high quality, cost-effective and technical management solutions.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Company Details</h3>
          <div className="space-y-2 text-gray-600">
            <p>Director: L.J. Mashimbyi</p>
            <p>Contact Number: 076-198-7496</p>
            <p>Email: mbeveconstructionptyltdluckyma@gmail.com</p>
            <p>Alternative Email: luckymash580@gmail.com</p>
            <p>Company Registration Number: 2019/011938/07</p>
            <p>Tax Clearance Certificate Number: 9097421243</p>
          </div>
        </section>
      </div>
    </div>
  );
}