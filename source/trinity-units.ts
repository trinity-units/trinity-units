
/*
** Trinity Units created by Jessé Silva aka Melchisedech333.
**
** Melchisedech333: https://github.com/melchisedech333
** Project: https://github.com/trinity-units/trinity-units
** 
** LICENSE:
**
** Copyright (c) 2022, Melchisedech333.
** 
** Redistribution and use in source and binary forms, with or without
** modification, are permitted provided that the following conditions are met:
** 
** 1. Redistributions of source code must retain the above copyright notice, this
**    list of conditions and the following disclaimer.
** 
** 2. Redistributions in binary form must reproduce the above copyright notice,
**    this list of conditions and the following disclaimer in the documentation
**    and/or other materials provided with the distribution.
** 
** 3. Neither the name of the copyright holder nor the names of its
**    contributors may be used to endorse or promote products derived from
**    this software without specific prior written permission.
** 
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
** AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
** IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
** DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
** FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
** DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
** SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
** CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
** OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**
*/

//
// Control of measurement units.
//
enum UNIT {

    // -> Speed.
    MPH, // Miles per hour.
    KMH, // Kilometers per hour.
    FTS, // Feet per second.
    MPS, // Meters per second.
    KNOT, // Knots, nautical mile per hour.

    // -> Length.
    KM, // Kilometers.
    M, // Meters.
    CM, // Centimeters.
    ML, // Millimeters.
    UM, // Micrometers.
    NM, // Nano meters.
    MILE, // Miles.
    YARD, // Yards.
    FT, // Feet.
    INCH, // Inches.
    NMILE, // Nautical miles.
}

class TrinityUnits {

    // General information.
    version = "1.0.0";
    projectPage = "https://github.com/trinity-units/trinity-units";
    
    // Controls.
    invalidValue = 0;
    unit: number;
    value: number;

    // Initialize.
    constructor() {
        console.log("Trinity Units v" + this.version);
        console.log("Project page: "+ this.projectPage);
    }

    // Return default invalid value.
    invalid() {
        return this.invalidValue;
    }

    /*
    ** Speed.
    */

    // -> Setters.

    // Set miles per hour.
    mph(value: number) {
        this.unit = UNIT.MPH;
        this.value = value;

        return this;
    }

    // Set kilometers per hour.
    kmh(value: number) {
        this.kmhInternal(value);
        return this;
    }

    kph(value: number) {
        this.kmhInternal(value);
        return this;
    }

    kmhInternal(value: number) {
        this.unit = UNIT.KMH;
        this.value = value;

        return this;
    }

    // Set feet per second.
    fts(value: number) {
        this.ftsInternal(value);
        return this;
    }

    fps(value: number) {
        this.ftsInternal(value);
        return this;
    }

    ftsInternal(value: number) {
        this.unit = UNIT.FTS;
        this.value = value;

        return this;
    }

    // Set meters per second.
    mps(value: number) {
        this.unit = UNIT.MPS;
        this.value = value;

        return this;
    }

    // Set knot.
    knot(value: number) {
        this.unit = UNIT.KNOT;
        this.value = value;

        return this;
    }

    // -> Process data.

    // Convert to miles per hour.
    toMph() {
        switch (this.unit) {
            case UNIT.MPH:
                return this.value;
            case UNIT.KMH:
                return this.value * 0.621371;
            case UNIT.FTS:
                return this.value * 0.681818;
            case UNIT.MPS:
                return this.value * 2.23694;
            case UNIT.KNOT:
                return this.value * 1.15078;
            default:
                return this.invalid();
        }
    }

    // Convert to quilometers per hour.
    toKmh() {
        return this.toKmhInternal();
    }

    toKph() {
        return this.toKmhInternal();
    }

    toKmhInternal() {
        switch (this.unit) {
            case UNIT.MPH:
                return this.value * 1.60934;
            case UNIT.KMH:
                return this.value;
            case UNIT.FTS:
                return this.value * 1.09728;
            case UNIT.MPS:
                return this.value * 3.6;
            case UNIT.KNOT:
                return this.value * 1.852;
            default:
                return this.invalid();
        }
    }

    // Convert to foot per second.
    toFps() {
        return this.toFtsInterval();
    }

    toFts() {
        return this.toFtsInterval();
    }

    toFtsInterval() {
        switch (this.unit) {
            case UNIT.MPH:
                return this.value * 1.46667;
            case UNIT.KMH:
                return this.value * 0.911344;
            case UNIT.FTS:
                return this.value;
            case UNIT.MPS:
                return this.value * 3.28084;
            case UNIT.KNOT:
                return this.value * 1.68781;
            default:
                return this.invalid();
        }
    }

    // Convert to meter per second.
    toMps() {
        switch (this.unit) {
            case UNIT.MPH:
                return this.value * 0.44704;
            case UNIT.KMH:
                return this.value * 0.277778;
            case UNIT.FTS:
                return this.value * 0.3048;
            case UNIT.MPS:
                return this.value;
            case UNIT.KNOT:
                return this.value * 0.51444;
            default:
                return this.invalid();
        }
    }

    // Convert to Knots.
    toKnot() {
        switch (this.unit) {
            case UNIT.MPH:
                return this.value * 0.868976;
            case UNIT.KMH:
                return this.value * 0.539957;
            case UNIT.FTS:
                return this.value * 0.592484;
            case UNIT.MPS:
                return this.value * 1.94384;
            case UNIT.KNOT:
                return this.value;
            default:
                return this.invalid();
        }
    }

    /*
    ** Length.
    */

    // -> Setters.
    
    // Set kilometers.
    km(value: number) {
        this.unit = UNIT.KM;
        this.value = value;

        return this;
    }

    // -> Process data.

    // Convert to quilometers.
    toKm() {
        switch (this.unit) {
            case UNIT.KM:
                return this.value;
            default:
                return this.invalid();
        }
    }

    // Convert to meters.
    toM() {
        switch (this.unit) {
            case UNIT.KM:
                return this.value * 1000;
            default:
                return this.invalid();
        }
    }

    // Convert to centimeters.
    toCm() {
        switch (this.unit) {
            case UNIT.KM:
                return this.value * 100000;
            default:
                return this.invalid();
        }
    }

    // // -> Length.
    // KM, // Kilometers.
    // M, // Meters.
    // CM, // Centimeters.
    // ML, // Millimeters.
    // UM, // Micrometers.
    // NM, // Nano meters.
    // MILE, // Miles.
    // YARD, // Yards.
    // FT, // Feet.
    // INCH, // Inches.
    // NMILE, // Nautical miles.
}


