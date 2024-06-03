class Validation {
  /**
   * Custom Alert Created
   * @param {*} msg
   * @param {*} type
   * @returns
   */

  alert = (msg, type = "danger") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
  };

  /**
   * All types of email verified
   * @param {*} email
   * @returns
   */

  email = (email) => {
    let pattern = /^[a-z_0-9\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,8}$/;
    return pattern.test(email);
  };

  /**
   * Bangladeshi Cell Number Check
   * @param {*} cell
   * @returns
   */

  mobileNumber = (cell) => {
    let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(cell);
  };
}
