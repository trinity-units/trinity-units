
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

class TrinityUnitsLength {
    
    // External attributes.
    unit: number;
    value: number;

    // External methods.
    invalid() { return 0; }
    processPrefix(prefix: string, value: number) {}

    /*
    * -> Setters.
    */

    // Set kilometers.
    km(value: number) {
        this.unit = TrinityUnitsBase.KM;
        this.value = value;

        return this;
    }

    // Set meters.
    m(value: number) {
        this.unit = TrinityUnitsBase.M;
        this.value = value;

        return this;
    }

    // Set centimeters.
    cm(value: number) {
        this.unit = TrinityUnitsBase.CM;
        this.value = value;

        return this;
    }

    // Set milimeters.
    mm(value: number) {
        this.unit = TrinityUnitsBase.MM;
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
        this.unit = TrinityUnitsBase.UM;
        this.value = value;

        return this;
    }

    // set nanometers.
    nm(value: number) {
        this.unit = TrinityUnitsBase.NM;
        this.value = value;

        return this;
    }

    // Set mile.
    mile(value: number) {
        this.unit = TrinityUnitsBase.MILE;
        this.value = value;

        return this;
    }

    // Set yard.
    yard(value: number) {
        this.ydInternal(value);
        return this;
    }

    yd(value: number) {
        this.ydInternal(value);
        return this;
    }

    ydInternal(value: number) {
        this.unit = TrinityUnitsBase.YARD;
        this.value = value;

        return this;
    }

    // Set foot.
    foot(value: number) {
        this.ftInternal(value);
        return this;
    }

    ft(value: number) {
        this.ftInternal(value);
        return this;
    }

    feet(value: number) {
        this.ftInternal(value);
        return this;
    }

    ftInternal(value: number) {
        this.unit = TrinityUnitsBase.FT;
        this.value = value;

        return this;
    }

    // Set inch.
    inch(value: number) {
        this.inchInternal(value);
        return this;
    }

    in(value: number) {
        this.inchInternal(value);
        return this;
    }

    inchInternal(value: number) {
        this.unit = TrinityUnitsBase.INCH;
        this.value = value;

        return this;
    }

    // Set nautical miles.
    nmi(value: number) {
        this.unit = TrinityUnitsBase.NMILE;
        this.value = value;

        return this;
    }

    // Set light year.
    ly(value: number) {
        this.unit = TrinityUnitsBase.LY;
        this.value = value;

        return this;
    }

    /*
    * -> Process data.
    */

    // Convert to quilometers.
    toKm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value; break;
            case TrinityUnitsBase.M:
                value = this.value / 1000; break;
            case TrinityUnitsBase.CM:
                value = this.value / 100000; break;
            case TrinityUnitsBase.MM:
                value = this.value / 1000000; break;
            case TrinityUnitsBase.UM:
                value = this.value / 1000000000; break;
            case TrinityUnitsBase.NM:
                value = this.value / 1000000000000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 1.609344; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 0.0009144; break;
            case TrinityUnitsBase.FT:
                value = this.value * 0.0003048; break;
            case TrinityUnitsBase.INCH:
                value = this.value * 0.0000254; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 1.852; break;
            case TrinityUnitsBase.LY:
                value = this.value * 9.461e+12;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to meters.
    toM(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 1000; break;
            case TrinityUnitsBase.M:
                value = this.value; break;
            case TrinityUnitsBase.CM:
                value = this.value / 100; break;
            case TrinityUnitsBase.MM:
                value = this.value / 1000; break;
            case TrinityUnitsBase.UM:
                value = this.value / 1000000; break;
            case TrinityUnitsBase.NM:
                value = this.value / 1000000000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 1609.344; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 0.9144; break;
            case TrinityUnitsBase.FT:
                value = this.value * 0.3048; break;
            case TrinityUnitsBase.INCH:
                value = this.value * 0.0254; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 1852; break;
            case TrinityUnitsBase.LY:
                value = this.value * 9.461e+15;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to centimeters.
    toCm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 100000; break;
            case TrinityUnitsBase.M:
                value = this.value * 100; break;
            case TrinityUnitsBase.CM:
                value = this.value; break;
            case TrinityUnitsBase.MM:
                value = this.value / 10; break;
            case TrinityUnitsBase.UM:
                value = this.value / 10000; break;
            case TrinityUnitsBase.NM:
                value = this.value / 10000000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 160934.4; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 91.44; break;
            case TrinityUnitsBase.FT:
                value = this.value * 30.48; break;
            case TrinityUnitsBase.INCH:
                value = this.value * 2.54; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 185200; break;
            case TrinityUnitsBase.LY:
                value = this.value * 9.461e+17;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to millimeters.
    toMm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 1000000; break;
            case TrinityUnitsBase.M:
                value = this.value * 1000; break;
            case TrinityUnitsBase.CM:
                value = this.value * 10; break;
            case TrinityUnitsBase.MM:
                value = this.value; break;
            case TrinityUnitsBase.UM:
                value = this.value / 1000; break;
            case TrinityUnitsBase.NM:
                value = this.value / 1000000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 1609344; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 914.4; break;
            case TrinityUnitsBase.FT:
                value = this.value * 304.8; break;
            case TrinityUnitsBase.INCH:
                value = this.value * 25.4; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 1852000; break;
            case TrinityUnitsBase.LY:
                value = this.value * 9.223e+18;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to micrometers.
    toUm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 1000000000; break;
            case TrinityUnitsBase.M:
                value = this.value * 1000000; break;
            case TrinityUnitsBase.CM:
                value = this.value * 10000; break;
            case TrinityUnitsBase.MM:
                value = this.value * 1000; break;
            case TrinityUnitsBase.UM:
                value = this.value; break;
            case TrinityUnitsBase.NM:
                value = this.value / 1000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 1609344000; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 914400; break;
            case TrinityUnitsBase.FT:
                value = this.value * 304800; break;
            case TrinityUnitsBase.INCH:
                value = this.value * 25400; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 1852000000; break;
            case TrinityUnitsBase.LY:
                value = this.value * 9.223e+18;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to nanometers.
    toNm(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 1000000000000; break;
            case TrinityUnitsBase.M:
                value = this.value * 1000000000; break;
            case TrinityUnitsBase.CM:
                value = this.value * 10000000; break;
            case TrinityUnitsBase.MM:
                value = this.value * 1000000; break;
            case TrinityUnitsBase.UM:
                value = this.value * 1000; break;
            case TrinityUnitsBase.NM:
                value = this.value; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 1609344000000; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 914400000; break;
            case TrinityUnitsBase.FT:
                value = this.value * 304800000; break;
            case TrinityUnitsBase.INCH:
                value = this.value * 25400000; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 1852000000000; break;
            case TrinityUnitsBase.LY:
                value = this.value * 9.223e+18;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to miles.
    toMile(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 0.621371; break;
            case TrinityUnitsBase.M:
                value = this.value * 0.000621371; break;
            case TrinityUnitsBase.CM:
                value = this.value * 0.00000621371; break;
            case TrinityUnitsBase.MM:
                value = this.value * 0.000000621371; break;
            case TrinityUnitsBase.UM:
                value = this.value / 1609000000; break;
            case TrinityUnitsBase.NM:
                value = this.value / 1609000000000; break;
            case TrinityUnitsBase.MILE:
                value = this.value; break;
            case TrinityUnitsBase.YARD:
                value = this.value / 1760; break;
            case TrinityUnitsBase.FT:
                value = this.value / 5280; break;
            case TrinityUnitsBase.INCH:
                value = this.value / 63360; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 1.1507794; break;
            case TrinityUnitsBase.LY:
                value = this.value * 5.879e+12;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to yards.
    toYard(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 1093.613298; break;
            case TrinityUnitsBase.M:
                value = this.value * 1.093613298; break;
            case TrinityUnitsBase.CM:
                value = this.value * 0.01093613298; break;
            case TrinityUnitsBase.MM:
                value = this.value * 0.001093613298; break;
            case TrinityUnitsBase.UM:
                value = this.value / 914400; break;
            case TrinityUnitsBase.NM:
                value = this.value / 914400000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 1760; break;
            case TrinityUnitsBase.YARD:
                value = this.value; break;
            case TrinityUnitsBase.FT:
                value = this.value / 3; break;
            case TrinityUnitsBase.INCH:
                value = this.value / 36; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 2025.3718; break;
            case TrinityUnitsBase.LY:
                value = this.value * 1.035e+16;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to feet.
    toFt(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 3280.839895; break;
            case TrinityUnitsBase.M:
                value = this.value * 3.280839895; break;
            case TrinityUnitsBase.CM:
                value = this.value * 0.03280839895; break;
            case TrinityUnitsBase.MM:
                value = this.value * 0.003280839895; break;
            case TrinityUnitsBase.UM:
                value = this.value / 304800; break;
            case TrinityUnitsBase.NM:
                value = this.value / 304800000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 5280; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 3; break;
            case TrinityUnitsBase.FT:
                value = this.value; break;
            case TrinityUnitsBase.INCH:
                value = this.value / 12; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 6076.11549; break;
            case TrinityUnitsBase.LY:
                value = this.value * 3.104e+16;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to inches.
    toIn(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 39370.07874; break;
            case TrinityUnitsBase.M:
                value = this.value * 39.37007874; break;
            case TrinityUnitsBase.CM:
                value = this.value / 2.54; break;
            case TrinityUnitsBase.MM:
                value = this.value / 25.4; break;
            case TrinityUnitsBase.UM:
                value = this.value / 25400; break;
            case TrinityUnitsBase.NM:
                value = this.value / 25400000; break;
            case TrinityUnitsBase.MILE:
                value = this.value * 63360; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 36; break;
            case TrinityUnitsBase.FT:
                value = this.value * 12; break;
            case TrinityUnitsBase.INCH:
                value = this.value; break;
            case TrinityUnitsBase.NMILE:
                value = this.value * 72913.386; break;
            case TrinityUnitsBase.LY:
                value = this.value * 3.725e+17;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to nautical miles.
    toNmi(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value * 0.621371; break;
            case TrinityUnitsBase.M:
                value = this.value * 0.000621371; break;
            case TrinityUnitsBase.CM:
                value = this.value / 185200; break;
            case TrinityUnitsBase.MM:
                value = this.value / 1852000; break;
            case TrinityUnitsBase.UM:
                value = this.value / 1852000000; break;
            case TrinityUnitsBase.NM:
                value = this.value / 1852000000000; break;
            case TrinityUnitsBase.MILE:
                value = this.value / 1.150779; break;
            case TrinityUnitsBase.YARD:
                value = this.value * 0.00049373650; break;
            case TrinityUnitsBase.FT:
                value = this.value * 0.000164579; break;
            case TrinityUnitsBase.INCH:
                value = this.value / 72913; break;
            case TrinityUnitsBase.NMILE:
                value = this.value; break;
            case TrinityUnitsBase.LY:
                value = this.value * 5.108e+12;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to light years.
    toLy(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.KM:
                value = this.value / 9461000000000; break;
            case TrinityUnitsBase.M:
                value = this.value / 9461000000000000; break;
            case TrinityUnitsBase.CM:
                value = this.value / 946100000000000000; break;
            case TrinityUnitsBase.MM:
                value = this.value / 9223000000000000000; break;
            case TrinityUnitsBase.UM:
                value = this.value / 9223000000000000000; break;
            case TrinityUnitsBase.NM:
                value = this.value / 9223000000000000000; break;
            case TrinityUnitsBase.MILE:
                value = this.value / 5879000000000; break;
            case TrinityUnitsBase.YARD:
                value = this.value / 10350000000000000; break;
            case TrinityUnitsBase.FT:
                value = this.value / 31040000000000000; break;
            case TrinityUnitsBase.INCH:
                value = this.value / 372500000000000000; break;
            case TrinityUnitsBase.NMILE:
                value = this.value / 5.108e+12; break;
            case TrinityUnitsBase.LY:
                value = this.value;
        }

        return this.processPrefix(prefix, value);
    }
}

// Add class to mixins control.
TrinityUnitsExtendsClasses.push(TrinityUnitsLength);


