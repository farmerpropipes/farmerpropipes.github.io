import { Fragment } from "react";

export default function BusinessHours() {
  return (
    <Fragment>
      <h3 className='mb-2.5 mt-0'>Business Hours</h3>
      <div className='flex justify-between items-center mb-2.5'>
        <b className='mr-2.5'>Monday-Saturday</b>
        <p>10am to 6pm</p>
      </div>
      <div className='flex justify-between items-center mb-2.5'>
        <b className='mr-2.5'>Sunday</b>
        <p>Closed</p>
      </div>
    </Fragment>
  )
}