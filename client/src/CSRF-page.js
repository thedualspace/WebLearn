import React from 'react';
import CSRF from './Quizzes/CSRF';
import {ModuleLayout} from './components/ModuleLayout'

//This must be done as I dont know how to pass props through react router (not possible?),
//so each module page must call a single component and send just one prop to it.
export const CSRFpage = () => (
  <ModuleLayout quiz={CSRF} />
)