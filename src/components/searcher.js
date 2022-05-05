import React from 'react';
import '../App.css';
import './searcher.css';

function Searcher() {
    return (
        <>
            <div className='mains'>
                <h3>Como podemos ajudar?</h3>
                <div className='searcharea'>
                    <form id="search">
                        <input type='text' id='searchText' placeholder='Qual a sua dúvida?'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Searcher;