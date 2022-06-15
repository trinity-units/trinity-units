
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
        }

        return this.processPrefix(prefix, value);
    }
}

// Add class to mixins control.
TrinityUnitsExtendsClasses.push(TrinityUnitsEnergy);


