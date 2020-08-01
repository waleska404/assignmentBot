import Welcome from './actions/welcome'
import ChoosenEnglish from './actions/choosen-english'
import ChoosenSpanish from './actions/choosen-spanish'
import NotFound from './actions/404'

export const routes = [
    { path: 'welcome', text: /hi|hello|hola/, action: Welcome },
    { path: 'chosen-english',payload:'english',action: ChoosenEnglish },
    { path: 'chosen-spanish', payload: 'spanish', action: ChoosenSpanish },
    { path: 'not-found', type: /.*/, action: NotFound }
]