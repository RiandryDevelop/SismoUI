

export default function About() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">About SismoUI</h1>
      <p>
       This app displays real-time earthquake information from official sources such as the USGS and ONAMET. 
       The goal is to provide accessible data and modern visualizations for researchers and the general public.
      </p>
      <p>
        Developed by Riandry Connor.
        For more information contact me at <a href="https://www.linkedin.com/in/riandry-connor/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>.
        or send me an email at <a href="mailto:riandrydevs@gmail.com" className="text-blue-500 hover:underline">riandrydevs@gmail.com</a>.
      </p>
    </div>
  );
}
