import Image from "next/image";

export default function PvcafsLight() {
  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">PVCAFS-LIGHT</h1>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="relative aspect-square">
                <Image
                  src="/images/products/flexible-ducts/Pvcafs-LIGHT.webp"
                  alt="PVCAFS-LIGHT"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diameter Range: 80mm to 500mm</li>
                <li>Standard Length: 10 meters</li>
                <li>Temperature Range: -20°C to +70°C</li>
                <li>Compression Ratio: 5:1</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lightweight and flexible</li>
                <li>Excellent compression ratio</li>
                <li>Easy to install and maintain</li>
                <li>Cost-effective solution</li>
                <li>Suitable for various applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}