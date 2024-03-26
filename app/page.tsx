import React from "react";
import FilterBar from "@/components/FilterBar/FilterBar";
export default function Home() {
  return (
    <div>
      <FilterBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex justify-center items-center">
              <img src="/static/images/fridge.png" />
            </div>
            <h1 className="text-5xl font-bold">Open mom's fridge. </h1>
            <p className="py-6">
              List all ingredients in your fridge for mom's recipes that uses
              the ingredients you currently own.
            </p>
            <div className="flex justify-center">
              <div className="flex-row px-2">
                <label className="form-control w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="label">
                    <span className="label-text-alt">
                      Separate ingredients by commas
                    </span>
                  </div>
                </label>
              </div>
              <div className="flex">
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
