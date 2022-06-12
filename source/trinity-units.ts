
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
    MM, // Millimeters.
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

    // Process prefix.
    processPrefix(prefix: string, finalValue: number) {
        switch (prefix) {
            case "round":
            case "r":
                return Math.round(finalValue);

            case "floor":
            case "f":
                return Math.floor(finalValue);

            case "ceil":
            case "c":
                return Math.ceil(finalValue);

            default:
                return finalValue;
        }
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
    toMph(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.MPH:
                value = this.value; break;
            case UNIT.KMH:
                value = this.value * 0.621371; break;
            case UNIT.FTS:
                value = this.value * 0.681818; break;
            case UNIT.MPS:
                value = this.value * 2.23694; break;
            case UNIT.KNOT:
                value = this.value * 1.15078;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to quilometers per hour.
    toKmh(prefix = '') {
        return this.toKmhInternal(prefix);
    }

    toKph(prefix = '') {
        return this.toKmhInternal(prefix);
    }

    toKmhInternal(prefix: string) {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.MPH:
                value = this.value * 1.60934; break;
            case UNIT.KMH:
                value = this.value; break;
            case UNIT.FTS:
                value = this.value * 1.09728; break;
            case UNIT.MPS:
                value = this.value * 3.6; break;
            case UNIT.KNOT:
                value = this.value * 1.852;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to foot per second.
    toFps(prefix = '') {
        return this.toFtsInterval(prefix);
    }

    toFts(prefix = '') {
        return this.toFtsInterval(prefix);
    }

    toFtsInterval(prefix: string) {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.MPH:
                value = this.value * 1.46667; break;
            case UNIT.KMH:
                value = this.value * 0.911344; break;
            case UNIT.FTS:
                value = this.value; break;
            case UNIT.MPS:
                value = this.value * 3.28084; break;
            case UNIT.KNOT:
                value = this.value * 1.68781;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to meter per second.
    toMps(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.MPH:
                value = this.value * 0.44704; break;
            case UNIT.KMH:
                value = this.value * 0.277778; break;
            case UNIT.FTS:
                value = this.value * 0.3048; break;
            case UNIT.MPS:
                value = this.value; break;
            case UNIT.KNOT:
                value = this.value * 0.51444;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to Knots.
    toKnot(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.MPH:
                value = this.value * 0.868976; break;
            case UNIT.KMH:
                value = this.value * 0.539957; break;
            case UNIT.FTS:
                value = this.value * 0.592484; break;
            case UNIT.MPS:
                value = this.value * 1.94384; break;
            case UNIT.KNOT:
                value = this.value;
        }

        return this.processPrefix(prefix, value);
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

    // Set meters.
    m(value: number) {
        this.unit = UNIT.M;
        this.value = value;

        return this;
    }

    // Set centimeters.
    cm(value: number) {
        this.unit = UNIT.CM;
        this.value = value;

        return this;
    }

    // Set milimeters.
    mm(value: number) {
        this.unit = UNIT.MM;
        this.value = value;

        return this;
    }

    // Set μm, micrometers.
    μm(value: number) {
        this.μmInternal(value);
        return this;
    }

    um(value: number) {
        this.μmInternal(value);
        return this;
    }

    μmInternal(value: number) {
        this.unit = UNIT.UM;
        this.value = value;

        return this;
    }

    // -> Process data.

    // Convert to quilometers.
    toKm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value; break;
            case UNIT.M:
                value = this.value / 1000; break;
            case UNIT.CM:
                value = this.value / 100000; break;
            case UNIT.MM:
                value = this.value / 1000000; break;
            case UNIT.UM:
                value = this.value / 1000000000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to meters.
    toM(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 1000; break;
            case UNIT.M:
                value = this.value; break;
            case UNIT.CM:
                value = this.value / 100; break;
            case UNIT.MM:
                value = this.value / 1000; break;
            case UNIT.UM:
                value = this.value / 1000000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to centimeters.
    toCm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 100000; break;
            case UNIT.M:
                value = this.value * 100; break;
            case UNIT.CM:
                value = this.value; break;
            case UNIT.MM:
                value = this.value / 10; break;
            case UNIT.UM:
                value = this.value / 10000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to millimeters.
    toMm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 1000000; break;
            case UNIT.M:
                value = this.value * 1000; break;
            case UNIT.CM:
                value = this.value * 10; break;
            case UNIT.MM:
                value = this.value; break;
            case UNIT.UM:
                value = this.value / 1000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to micrometers.
    toUm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 1000000000; break;
            case UNIT.M:
                value = this.value * 1000000; break;
            case UNIT.CM:
                value = this.value * 10000; break;
            case UNIT.MM:
                value = this.value * 1000; break;
            case UNIT.UM:
                value = this.value; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to nanometers.
    toNm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 1000000000000; break;
            case UNIT.M:
                value = this.value * 1000000000; break;
            case UNIT.CM:
                value = this.value * 10000000; break;
            case UNIT.MM:
                value = this.value * 1000000; break;
            case UNIT.UM:
                value = this.value * 1000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to miles.
    toMile(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 0.621371; break;
            case UNIT.M:
                value = this.value * 0.000621371; break;
            case UNIT.CM:
                value = this.value * 0.00000621371; break;
            case UNIT.MM:
                value = this.value * 0.000000621371; break;
            case UNIT.UM:
                value = this.value / 1609000000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to yards.
    toYard(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 1093.613298; break;
            case UNIT.M:
                value = this.value * 1.093613298; break;
            case UNIT.CM:
                value = this.value * 0.01093613298; break;
            case UNIT.MM:
                value = this.value * 0.001093613298; break;
            case UNIT.UM:
                value = this.value / 914400; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to feet.
    toFt(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 3280.839895; break;
            case UNIT.M:
                value = this.value * 3.280839895; break;
            case UNIT.CM:
                value = this.value * 0.03280839895; break;
            case UNIT.MM:
                value = this.value * 0.003280839895; break;
            case UNIT.UM:
                value = this.value / 304800; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to inches.
    toIn(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 39370.07874; break;
            case UNIT.M:
                value = this.value * 39.37007874; break;
            case UNIT.CM:
                value = this.value / 2.54; break;
            case UNIT.MM:
                value = this.value / 25.4; break;
            case UNIT.UM:
                value = this.value / 25400; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to miles.
    toNmi(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case UNIT.KM:
                value = this.value * 0.621371; break;
            case UNIT.M:
                value = this.value * 0.000621371; break;
            case UNIT.CM:
                value = this.value / 185200; break;
            case UNIT.MM:
                value = this.value / 1852000; break;
        }

        return this.processPrefix(prefix, value);
    }
}


