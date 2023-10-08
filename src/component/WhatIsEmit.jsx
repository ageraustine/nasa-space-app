import React from 'react';
import { emit } from '../assets';

export const WhatIsEmit = () => {
  return (
    <div className="container mx-auto py-8 mt-4">
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">What is used used?</h2>
      <div className="flex flex-wrap -mx-4"></div>
      <p className="text-lg text-gray-700 leading-relaxed">
        EMIT is an advanced imaging spectrometer that analyzes light in the visible and shortwave infrared ranges. It is designed to map the mineral composition of the Earth's arid surface, providing critical insights into various environmental factors.
      </p>

      <br />

      <h2 className="text-xl font-semibold mt-6">EMIT Mineral Dust Source Measurements</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Mineral dust blown into the air plays a crucial role in our planet's ecosystem. Wind transports dust from desert regions across the globe, impacting climate and human populations. EMIT addresses this by accurately mapping mineral dust sources and their effects on the Earth's system.
      </p>

      <br />

      <h2 className="text-xl font-semibold mt-6">About the Instrument</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        EMIT utilizes Imaging Spectroscopy, a technology invented by NASA and widely used in its space missions. This instrument measures light in visible and infrared wavelengths and can create spectral signatures indicating the mineral composition of the Earth's surface. With the capability to acquire over 100,000 spectra per second, EMIT provides a comprehensive view of Earth's mineral composition.
      </p>

      <br />

      <div className="mt-6 relative">
        <img src={emit} alt="EMIT Instrument" className="w-full rounded-lg shadow" />
        <small className="absolute bottom-0 right-0 m-4 text-gray-600 italic">
            <i>Copyright <span className="underline">NASA</span></i>
        </small>
        </div>

        <br />
      <p className="text-lg text-gray-700 leading-relaxed mt-6">
        EMIT incorporates several advanced technologies, including its Dyson spectrometer optical layout, which maximizes light throughput. Custom coatings on the detector array enhance sensitivity across EMIT's wavelength range. With a uniform spectral response across its field of view, EMIT uses advanced data processing algorithms for precise mineral mapping.
      </p>
      <br />
    </div>
  );
};
