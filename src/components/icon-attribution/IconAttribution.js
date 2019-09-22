import React from 'react'
import './IconAttribution.css';

const smashicons = (
  <a
    href="https://www.flaticon.com/authors/smashicons"
    title="Smashicons"
  >
    Smashicons
  </a>
)

const flaticon = (
  <a
    href="https://www.flaticon.com/"
    title="Flaticon"
  >
    www.flaticon.com
  </a>
)

const creativeCommons = (
  <a
    href="http://creativecommons.org/licenses/by/3.0/"
    title="Creative Commons BY 3.0"
    target="_blank"
    rel="noopener noreferrer"
  >
    CC 3.0 BY
  </a>
)

export const IconAttribution = () => (
  <div className="icon-attribution">
    Sound icons made by {smashicons} from {flaticon} is licensed by {creativeCommons}
  </div>
);
