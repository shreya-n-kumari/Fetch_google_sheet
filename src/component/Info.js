import React from 'react'

const Info = () => {
  return (
    <section className="container mx-auto p-6 bg-[#001845]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Why Choose Us Section */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl text-white font-bold mb-4">Why Choose Us?</h2>
          <p className="mb-4 text-gray-500">
            Discover our unique value propositions that set us apart from the competition.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Innovative solutions tailored to your needs</li>
            <li>Exceptional customer support</li>
            <li>Proven track record of success</li>
            <li>Cutting-edge technology and strategies</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl text-white font-bold mb-4">How It Works</h2>
          <p className="mb-4 text-gray-500">
            Follow our simple, step-by-step process to get started.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-500">
            <li>Contact us to schedule a consultation</li>
            <li>Discuss your goals and requirements</li>
            <li>Receive a customized proposal</li>
            <li>Kick off your project with our expert team</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Info
