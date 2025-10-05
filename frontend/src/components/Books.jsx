const books = [
  "Freedom from the Self" ,
  "The lover you have been missing",
  "Ego",
  "Infinite Potential , Unlimited Success",
  "Sessions at IITs",
  "Young Intellects" ,
];

const images = [
    "https://cimg.acharyaprashant.org/images/img-aa5a3284-8db6-4c81-84d2-2c5ab4a22543/20/image.jpg" ,
    "https://cimg.acharyaprashant.org/images/img-cb663133-f40e-4069-9a5e-d332bf8e3151/20/image.jpg" ,
    "https://cimg.acharyaprashant.org/images/img-dd80d90f-bf1f-40dc-8ac6-93b83cb2880a/20/image.jpg" ,
    "https://cimg.acharyaprashant.org/images/img-4287e96c-aa21-40f1-90ed-448294d45a7e/20/image.jpg" ,
    "https://cimg.acharyaprashant.org/images/img-dd254769-7fa4-4751-b086-55446275a7d7/20/image.jpg" ,
    "https://cimg.acharyaprashant.org/images/img-23fcff1b-faf9-43b7-aca2-c07abafff826/20/image.jpg"


    
]

export default function Books() {
  return (
    <section className="p-6 mt-6">
      <h2 className="text-xl font-semibold text-center mb-4">Books (View Only)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.map((title, index) => (
          <div
            key={index}
            className="bg-white border p-4 rounded shadow hover:shadow-md transition"
          >
            <img className="h-[180px] w-full" src={images[index]} alt={`imageNo${index}`} />
            <h3 className="mt-3 font-medium text-center">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
