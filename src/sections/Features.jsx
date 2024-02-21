import Card from "../components/Card.jsx";
/* import { faCoffee } from '@fortawesome/free-solid-svg-icons' */

const Features = () => {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Card title={"başlık"} text={"merhabalar"} iconBox={"bi bi-airplane"} />  
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Features;