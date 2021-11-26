/**
  * 
	* @author Darko Petrovic
  * @Link Facebook: https://www.facebook.com/WitchkingOfAngmarr
  * @Link GitHub: https://github.com/darkoxv88
  * 
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.


exports:

  window.Cookie;

backup:

  window.___webpack_export_dp_Cookie___.definition

**/

export declare class CookieOptions {
  public path: string;
  public domain: string;
  public samesite: null | 'lax' | 'strict' | 'none';
  public secure: boolean;
  public httponly: boolean;
}

export declare class Cookie {

  static put(cookieName: string, value: string | number | boolean, duration: Date, options?: CookieOptions): void;

  static get(cookieName: string): string | number | boolean;

  static delete(cookieName: string, options?: CookieOptions): void;

  static putObject(obj: { [name: string]: string | number | boolean }, duration: Date, options?: CookieOptions): void;

  static getAll(): { [name: string]: string | number | boolean };

  static createCookieOptions(): CookieOptions;

  static createDateInDays(days: number): Date;

  static createDateInHours(hours: number): Date;

  static createDateInMinutes(minutes: number): Date;
}
