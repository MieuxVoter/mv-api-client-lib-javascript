"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GradejsonldRead model module.
 * @module MieuxVoter/model/GradejsonldRead
 * @version 0.0.0-dev
 */
var GradejsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GradejsonldRead</code>.
   * Grades are attributed to Proposals by Participants, in Ballots.
   * @alias module:MieuxVoter/model/GradejsonldRead
   */
  function GradejsonldRead() {
    _classCallCheck(this, GradejsonldRead);

    GradejsonldRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GradejsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GradejsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/GradejsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/GradejsonldRead} The populated <code>GradejsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GradejsonldRead();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GradejsonldRead;
}();
/**
 * @member {String} @context
 */


GradejsonldRead.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

GradejsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

GradejsonldRead.prototype['@type'] = undefined;
/**
 * Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
 * @member {String} uuid
 */

GradejsonldRead.prototype['uuid'] = undefined;
/**
 * @member {String} name
 */

GradejsonldRead.prototype['name'] = undefined;
/**
 * Used to compare grades procedurally.  \\n Usually starts at zero (0) and ends at <MAXIMUM_GRADES>-1.  \\n Grades of the same poll MUST have unique levels between themselves.
 * @member {Number} level
 */

GradejsonldRead.prototype['level'] = undefined;
var _default = GradejsonldRead;
exports["default"] = _default;