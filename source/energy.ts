
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
** 
** Control of energy related units.
** 
*/

class TrinityUnitsEnergy {
    
    // External attributes.
    unit: number;
    value: number;

    // External methods.
    invalid() { return 0; }
    processPrefix(prefix: string, value: number) {}

    /*
    * -> Setters.
    */

    // Set joules.
    j(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.J;

        return this;
    }

    // Set kilojoules.
    kj(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.KJ;

        return this;
    }

    // Set megajoules.
    mj(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.MJ;

        return this;
    }

    // Set gram-calories.
    gc(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.GC;

        return this;
    }

    // Set kilocalories.
    kc(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.KC;

        return this;
    }

    // Set watt-hours.
    wh(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.WH;

        return this;
    }

    // Set kilowatt-hours.
    kwh(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.KWH;

        return this;
    }

    // Set electronvolts.
    ev(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.EV;

        return this;
    }

    // Set British thermal units.
    btu(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.BTU;

        return this;
    }

    // Set US Therm.
    ust(value) {
        this.ustInternal(value);
        return this;
    }

    USTherm(value) {
        this.ustInternal(value);
        return this;
    }

    ustInternal(value) {
        this.value = value;
        this.unit = TrinityUnitsBase.UST;

        return this;
    }

    /*
    * -> Process data.
    */

    // Convert to joules.
    toJ(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value; break;
            case TrinityUnitsBase.KJ:
                value = this.value * 1000; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 1e+6; break;
            case TrinityUnitsBase.GC:
                value = this.value * 4.184; break;
            case TrinityUnitsBase.KC:
                value = this.value * 4.184e+3; break;
            case TrinityUnitsBase.WH:
                value = this.value * 3600; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 3600000; break;
            case TrinityUnitsBase.EV:
                value = this.value / 6.242e+18; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 1055.056; break;
            case TrinityUnitsBase.UST:
                value = this.value * 105505585.262; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to kilojoules.
    toKj(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 1000; break;
            case TrinityUnitsBase.KJ:
                value = this.value; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 1000; break;
            case TrinityUnitsBase.GC:
                value = this.value * 0.0041868; break;
            case TrinityUnitsBase.KC:
                value = this.value * 4.184; break;
            case TrinityUnitsBase.WH:
                value = this.value * 3.6; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 3600; break;
            case TrinityUnitsBase.EV:
                value = this.value * 1.6021774e-22; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 1.055; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to megajoules.
    toMj(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 1e+6; break;
            case TrinityUnitsBase.KJ:
                value = this.value / 1000; break;
            case TrinityUnitsBase.MJ:
                value = this.value; break;
            case TrinityUnitsBase.GC:
                value = this.value * 4.184e-6; break;
            case TrinityUnitsBase.KC:
                value = this.value * 0.004184; break;
            case TrinityUnitsBase.WH:
                value = this.value * 0.0036; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 3.6; break;
            case TrinityUnitsBase.EV:
                value = this.value * 1.6021774e-25; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 0.001055; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to gram calories.
    toGc(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 4.184; break;
            case TrinityUnitsBase.KJ:
                value = this.value * 238.90296; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 238902.95762; break;
            case TrinityUnitsBase.GC:
                value = this.value; break;
            case TrinityUnitsBase.KC:
                value = this.value * 1000; break;
            case TrinityUnitsBase.WH:
                value = this.value * 860.05065; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 860050.64743; break;
            case TrinityUnitsBase.EV:
                value = this.value * 3.8276489559941e-20; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 251.88741; break;
        }

        return this.processPrefix(prefix, value);
    }
    
    // Convert to kilocalories.
    toKc(prefix = '') {
        return this.toKcInternal(prefix);
    }

    toKcal(prefix = '') {
        return this.toKcInternal(prefix);
    }

    toKcInternal(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 4184; break;
            case TrinityUnitsBase.KJ:
                value = this.value / 4.184; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 239.01; break;
            case TrinityUnitsBase.GC:
                value = this.value / 1000; break;
            case TrinityUnitsBase.KC:
                value = this.value; break;
            case TrinityUnitsBase.WH:
                value = this.value * 0.860421; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 860.42065; break;
            case TrinityUnitsBase.EV:
                value = this.value * 3.8267351e-23; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 0.25206; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to watt hours.
    toWh(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 3600; break;
            case TrinityUnitsBase.KJ:
                value = this.value / 3.6; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 277.777778; break;
            case TrinityUnitsBase.GC:
                value = this.value * 0.0011622; break;
            case TrinityUnitsBase.KC:
                value = this.value * 1.1622; break;
            case TrinityUnitsBase.WH:
                value = this.value; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 1000; break;
            case TrinityUnitsBase.EV:
                value = this.value * 4.4505e-23; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 0.293071; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to kilowatt hours.
    toKwh(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value / 3.6e+6; break;
            case TrinityUnitsBase.KJ:
                value = this.value / 3600; break;
            case TrinityUnitsBase.MJ:
                value = this.value / 3.6; break;
            case TrinityUnitsBase.GC:
                value = this.value * 0.0000011627222222222; break;
            case TrinityUnitsBase.KC:
                value = this.value * 0.001162; break;
            case TrinityUnitsBase.WH:
                value = this.value / 1000; break;
            case TrinityUnitsBase.KWH:
                value = this.value; break;
            case TrinityUnitsBase.EV:
                value = this.value * 4.4505e-26; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 0.000293; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to electron volts.
    toEv(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value * 6.2415093433e+18; break;
            case TrinityUnitsBase.KJ:
                value = this.value * 6.2415064799632E+21; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 6.241506363094E+24; break;
            case TrinityUnitsBase.GC:
                value = this.value * 2.612569782383E+19; break;
            case TrinityUnitsBase.KC:
                value = this.value * 2.611e+22; break;
            case TrinityUnitsBase.WH:
                value = this.value * 2.2469e+22; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 2.2469e+25; break;
            case TrinityUnitsBase.EV:
                value = this.value; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 6.5851e+21; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to British thermal units.
    toBtu(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value * 0.00094781712; break;
            case TrinityUnitsBase.KJ:
                value = this.value / 1.055; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 947.81712; break;
            case TrinityUnitsBase.GC:
                value = this.value * 0.00397; break;
            case TrinityUnitsBase.KC:
                value = this.value * 3.965667; break;
            case TrinityUnitsBase.WH:
                value = this.value * 3.412142; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 3412.1416416; break;
            case TrinityUnitsBase.EV:
                value = this.value * 1.5186e-22; break;
            case TrinityUnitsBase.BTU:
                value = this.value; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to US Therm.
    toUst(prefix = '') {
        return this.toUSThermInternal(prefix);
    }

    toUSTherm(prefix = '') {
        return this.toUSThermInternal(prefix);
    }

    toUSThermInternal(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value * 0.0000000094804; break;
            case TrinityUnitsBase.KJ:
                value = this.value * 0.0000094804; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 0.009478; break;
            case TrinityUnitsBase.GC:
                value = this.value * 3.9657e-8; break;
            case TrinityUnitsBase.KC:
                value = this.value * 3.9657e-5; break;
            case TrinityUnitsBase.WH:
                value = this.value * 3.41296e-5; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 0.034130; break;
            case TrinityUnitsBase.EV:
                value = this.value * 1.5189336881544e-27; break;
            case TrinityUnitsBase.BTU:
                value = this.value / 100000; break;
        }

        return this.processPrefix(prefix, value);
    }

    // Convert to foot-pound.
    toFp(prefix = '') {
        var value = this.invalid();

        switch (this.unit) {
            case TrinityUnitsBase.J:
                value = this.value * 0.737562149; break;
            case TrinityUnitsBase.KJ:
                value = this.value * 737.56; break;
            case TrinityUnitsBase.MJ:
                value = this.value * 737562.14928; break;
            case TrinityUnitsBase.GC:
                value = this.value * 3.086; break;
            case TrinityUnitsBase.KC:
                value = this.value * 3088.03; break;
            case TrinityUnitsBase.WH:
                value = this.value * 2655.22; break;
            case TrinityUnitsBase.KWH:
                value = this.value * 2655200; break;
            case TrinityUnitsBase.EV:
                value = this.value * 0.00000000000000000011817; break;
            case TrinityUnitsBase.BTU:
                value = this.value * 778.1693; break;
        }

        return this.processPrefix(prefix, value);
    }
}

// Add class to mixins control.
TrinityUnitsExtendsClasses.push(TrinityUnitsEnergy);


