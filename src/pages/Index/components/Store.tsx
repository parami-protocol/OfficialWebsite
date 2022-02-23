import { createRef } from 'react'

const state = {
    sections: 5,
    pages: 3,
    zoom: 1,
    top: createRef() as any,
}

export default state;
