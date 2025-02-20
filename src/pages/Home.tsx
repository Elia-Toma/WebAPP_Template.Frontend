import { useTranslation } from "react-i18next";

const Home = () => {
    const [t] = useTranslation();

    return (
        <div>
            <section className='content'>
                <div className='container-fluid'>
                    <h1 className="card-shadow">{t('pages.home.title')}</h1>
                    <button
                        className="card-shadow"
                        onClick={() => {
                        }}
                    >
                        Button
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;