import {useEffect, useState} from "react";

function Contact() {
    const [storageValue, setStorageValue] = useState([])
    let storage = {}
    let name = document.querySelector('input[type="text"]')
    let mail = document.querySelector('input')
    let message = document.querySelector('textarea')
    const submit = document.querySelector('#submit')

    useEffect(() => {
        window.addEventListener('click', function (e) {
            // setLocalstorage()
            e.preventDefault()
            // name = ''
            // mail = ''
            // message = ''
        })
        if (name.value == null || mail.value == null || message.value == null) {
            return
        }

        if (name !== null && mail !== null && message !== null) {
            storage.push(name)
            storage.push(mail)
            storage.push(message)
            // function setLocalstorage() {
            //     setStorageValue(JSON.stringify(storage))
            //     console.log(storageValue)
            //     localStorage.setItem('contact', storageValue)
            // }

        } else {
            return console.log('err')
        }
    }, [submit])

    return (
        <section className="h-[calc(100vh-184px)] flex flex-col justify-center items-center">
            <div className="w-full md:w-[50%] m-auto py-2 px-6">

                <h1 className="text-3xl text-center mb-2">Contact me</h1>
                <p className="text-lg text-center">Je vous répondrez dans les plus bref délais</p>
                <form className="max-w-5xl w-full mt-6">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                               placeholder="Nom ou Société"/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                               placeholder="Adresse Email"/>
                    </div>
                    <div className="form-group mb-6">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="message" rows="3" placeholder="Description du projet"></textarea>
                    </div>

                    <button type="submit" id="submit" className="
          w-full
          px-6
          py-2.5
          bg-blue
          text-white
          font-medium
          text-sm
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Envoyé
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
