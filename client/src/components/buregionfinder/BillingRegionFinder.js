import React from 'react'
import { useFormik } from 'formik'

const BillingRegionFinder = () => {
  const formik = useFormik({
    initialValues: {
      state: '',
      billingUnit: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div class="flex flex-wrap -mx-2 mb-8">
          <div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div class="m-5 h-12 text-sm text-grey-dark flex flex-col justify-center">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                for="state"
              >
                State
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="text"
                name="state"
                id="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div class="m-5 h-12 text-sm text-grey-dark flex flex-col justify-center">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                for="billingUnit"
              >
                Billing Unit
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="text"
                name="billingUnit"
                id="billingUnit"
                value={formik.values.billingUnit}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div class="m-5 h-12 text-sm text-grey-dark flex flex-col justify-center">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                for="region"
              >
                Region Name
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="text"
                name="region"
                id="region"
                value={formik.values.region}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Find
          </button>
        </div>
      </form>
    </div>
  )
}

export default BillingRegionFinder
