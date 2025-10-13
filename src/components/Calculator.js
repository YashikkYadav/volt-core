"use client";
import React, { useState } from "react";

export const Calculator = () => {
  const [bill, setBill] = useState("");
  const [data, setData] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    const avgBill = parseFloat(bill);
    if (isNaN(avgBill) || avgBill < 500 || avgBill > 10000) {
      alert("Please enter a valid electricity bill between ₹500 and ₹10,000.");
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const systemSize = +((avgBill / 1000) * 1.2).toFixed(1);
      const roofArea = Math.ceil(systemSize * 60);
      const monthlySavings = Math.round(avgBill * 0.8);
      const yearlySavings = monthlySavings * 12;
      const guaranteedSavings = yearlySavings * 5;
      const totalCost = Math.round(systemSize * 80000);
      const centralSubsidy = -Math.round(totalCost * 0.33);
      const netCost = totalCost + centralSubsidy;
      const lifetimeSavings = yearlySavings * 25;
      const roi = (((lifetimeSavings - netCost) / netCost) * 100).toFixed(2);
      const minDownPayment = Math.round(totalCost * 0.33);
      const netDownPayment = 0;
      const emiTenure = "5 year";
      const emiAmount = Math.round(netCost / 5 / 12);
      const co2Mitigated = (systemSize * 1500).toLocaleString();
      const treesPlanted = Math.round(systemSize * 40);
      const distanceEquivalent = (systemSize * 10000).toLocaleString();

      setData({
        systemSize,
        roofArea,
        monthlySavings,
        yearlySavings,
        guaranteedSavings,
        totalCost,
        centralSubsidy,
        netCost,
        lifetimeSavings,
        roi,
        minDownPayment,
        netDownPayment,
        emiTenure,
        emiAmount,
        co2Mitigated,
        treesPlanted,
        distanceEquivalent,
      });

      setIsCalculating(false);
    }, 500);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="py-10 px-2">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h2 className="h2">
            Solar Cost Calculator
          </h2>
          <p className="lead">
            Discover your potential savings and environmental impact with our solar energy solutions
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-light p-4 rounded-1 shadow-soft mb-4">
          <label className="form-label fw-bold">
            Monthly Electricity Bill
          </label>
          <div className="input-group mb-2">
            <span className="input-group-text">₹</span>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter amount"
              className="form-control"
            />
          </div>
          <p className="text-muted small">Enter amount between ₹500 - ₹10,000</p>
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="btn-main w-100"
          >
            {isCalculating ? "Calculating..." : "Calculate Solar Savings"}
          </button>
        </div>

        {data && (
          <div className="space-y-4">
            {/* System Requirements */}
            <div className="bg-white rounded-1 shadow-soft p-4">
              <h3 className="text-center mb-4 h3">
                System Requirements
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="bg-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">System Size</p>
                    <h4 className="id-color">{data.systemSize} kW</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Roof Area Required</p>
                    <h4 className="id-color">{data.roofArea} sq.ft</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Overview */}
            <div className="bg-white rounded-1 shadow-soft p-4">
              <h3 className="text-center mb-4 h3">
                Your Solar Savings
              </h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="bg-success-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Monthly Savings</p>
                    <h4 className="text-success">₹{data.monthlySavings.toLocaleString()}</h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-success-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Yearly Savings</p>
                    <h4 className="text-success">₹{data.yearlySavings.toLocaleString()}</h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-warning-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">5-Year Savings</p>
                    <h4 className="text-warning">₹{data.guaranteedSavings.toLocaleString()}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Overview */}
            <div className="bg-white rounded-1 shadow-soft p-4">
              <h3 className="text-center mb-4 h3">
                Investment Overview
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="bg-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Total System Cost</p>
                    <h4>₹{data.totalCost.toLocaleString()}</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-danger-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Government Subsidy</p>
                    <h4 className="text-danger">₹{data.centralSubsidy.toLocaleString()}</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-primary-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Net Investment</p>
                    <h4 className="text-primary">₹{data.netCost.toLocaleString()}</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-success-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Lifetime Savings (25 Years)</p>
                    <h4 className="text-success">₹{data.lifetimeSavings.toLocaleString()}</h4>
                  </div>
                </div>
                <div className="col-12">
                  <div className="bg-info-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Return on Investment</p>
                    <h4 className="text-info">{data.roi}%</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-white rounded-1 shadow-soft p-4">
              <h3 className="text-center mb-4 h3">
                Environmental Impact
              </h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="bg-primary-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">CO₂ Mitigated</p>
                    <h4 className="text-primary">{data.co2Mitigated} kg</h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-success-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Trees Equivalent</p>
                    <h4 className="text-success">{data.treesPlanted}</h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-info-light rounded-1 p-3 text-center">
                    <p className="mb-1 fw-bold">Car Miles Saved</p>
                    <h4 className="text-info">{data.distanceEquivalent} km</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};