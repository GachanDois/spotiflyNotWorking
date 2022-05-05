import React from 'react';
import '../App.css';
import './MeioFAQ.css';
import Faq from "react-faq-component";



const data = {

    rows: [
        {
            title: <h8>Ajuda com pagamentos</h8>,
            content: <h9>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue magna, convallis quis eros id, luctus ullamcorper neque. Vivamus ut diam erat. Duis viverra ut mauris vitae vulputate. Fusce malesuada mi in suscipit lobortis. Maecenas vestibulum libero a placerat congue. Fusce eget lobortis purus. Curabitur nec iaculis justo, in dictum odio. Quisque tincidunt, lacus vitae rutrum hendrerit, lacus lorem laoreet leo, eget ornare libero urna id augue.,
            </h9>
        },
        {
            title: <h8>Ajuda com o plano</h8>,
            content: <h9>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue magna, convallis quis eros id, luctus ullamcorper neque. Vivamus ut diam erat. Duis viverra ut mauris vitae vulputate. Fusce malesuada mi in suscipit lobortis. Maecenas vestibulum libero a placerat congue. Fusce eget lobortis purus. Curabitur nec iaculis justo, in dictum odio. Quisque tincidunt, lacus vitae rutrum hendrerit, lacus lorem laoreet leo, eget ornare libero urna id augue.,
            </h9>
        },
        {
            title: <h8>Ajuda com o app</h8>,
            content: <h9>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue magna, convallis quis eros id, luctus ullamcorper neque. Vivamus ut diam erat. Duis viverra ut mauris vitae vulputate. Fusce malesuada mi in suscipit lobortis. Maecenas vestibulum libero a placerat congue. Fusce eget lobortis purus. Curabitur nec iaculis justo, in dictum odio. Quisque tincidunt, lacus vitae rutrum hendrerit, lacus lorem laoreet leo, eget ornare libero urna id augue.,
            </h9>
        },
        {
            title: <h8>Ajuda com dispositivos</h8>,
            content: <h9>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue magna, convallis quis eros id, luctus ullamcorper neque. Vivamus ut diam erat. Duis viverra ut mauris vitae vulputate. Fusce malesuada mi in suscipit lobortis. Maecenas vestibulum libero a placerat congue. Fusce eget lobortis purus. Curabitur nec iaculis justo, in dictum odio. Quisque tincidunt, lacus vitae rutrum hendrerit, lacus lorem laoreet leo, eget ornare libero urna id augue.,
            </h9>
        },
        {
            title: <h8>Privacidade e Dados</h8>,
            content: <h9>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue magna, convallis quis eros id, luctus ullamcorper neque. Vivamus ut diam erat. Duis viverra ut mauris vitae vulputate. Fusce malesuada mi in suscipit lobortis. Maecenas vestibulum libero a placerat congue. Fusce eget lobortis purus. Curabitur nec iaculis justo, in dictum odio. Quisque tincidunt, lacus vitae rutrum hendrerit, lacus lorem laoreet leo, eget ornare libero urna id augue.,
            </h9>
        },
        {
            title: <h8>Ajuda com a conta</h8>,
            content: <h9>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue magna, convallis quis eros id, luctus ullamcorper neque. Vivamus ut diam erat. Duis viverra ut mauris vitae vulputate. Fusce malesuada mi in suscipit lobortis. Maecenas vestibulum libero a placerat congue. Fusce eget lobortis purus. Curabitur nec iaculis justo, in dictum odio. Quisque tincidunt, lacus vitae rutrum hendrerit, lacus lorem laoreet leo, eget ornare libero urna id augue.,
            </h9>
        },

    ],

};

const styles = {
    // bgColor: 'white',
    titleTextColor: "white",
    rowTitleColor: "white",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    bgColor: "#FFF"
}

const config = {
    animate: true,
    //arrowIcon: "V",
    tabFocus: true
};

export default function App() {

    return (
        <div className='thewhole'>
            <div className="main">

                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
}

