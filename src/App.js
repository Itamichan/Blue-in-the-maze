import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faChevronUp, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Layout from "./Components/Layout/Layout";

library.add(fab, faChevronDown, faChevronUp, faChevronRight, faChevronLeft );

function App() {
    return (
        <div>
            <Layout/>
        </div>
    );
}

export default App;
