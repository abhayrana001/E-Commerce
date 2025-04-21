import React from 'react'
import styles from "@/styles/Home/Hero.module.css"
import Container from '../Container'
import Slider from './Slider'
const HeroSection = () => {
    return (
        <Container>
            <section className={styles.hero}>
                {/* Text Section */}
                <div className={`${styles.textSection} text-gray-700`}>
                    <h1>
                        One stop solution <span className='text-fuchsia-500'>Klicksy</span>
                    </h1>
                    <p>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
                    <p>Exclusive deals just for you!</p>
                    <button className={styles.ctaButton}>Shop Now</button>
                </div>

                {/* Image Slider Section */}
                <Slider />
            </section>
        </Container>

    )
}

export default HeroSection