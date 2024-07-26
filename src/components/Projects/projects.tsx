// Import your CSS file
import './projects.css';

export default function Projects() {
    return (
        <nav className="h-[90vh] w-full bg-black">
            <div className="flex items-center justify-center">
                <h1 className="py-8 text-6xl text-education">Projects</h1>
            </div>
            <div className="flex items-center justify-center w-full h-full bg-black">
                <div className="flex p-4">
                    <a href='https://github.com/niezgodam/human-benchmark-reactJS-flask-mongoDB-' target='_blank'><div className='img1'></div></a>
                </div>
                <div className="flex p-4">
                <a href='https://github.com/niezgodam/weather-app-frontend' target='_blank'><div className='img2'></div></a>
                </div>
            </div>
        </nav>
    );
}
