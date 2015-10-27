(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name govrightCorpusServices
 * @module
 * @description
 *
 * The `govrightCorpusServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("govrightCorpusServices", ['ngResource']);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Law
 * @header govrightCorpusServices.Law
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Law` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Law",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Laws/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Law.discussions.findById() instead.
        "prototype$__findById__discussions": {
          url: urlBase + "/Laws/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Law.discussions.destroyById() instead.
        "prototype$__destroyById__discussions": {
          url: urlBase + "/Laws/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Law.discussions.updateById() instead.
        "prototype$__updateById__discussions": {
          url: urlBase + "/Laws/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Law.nodes.findById() instead.
        "prototype$__findById__nodes": {
          url: urlBase + "/Laws/:id/nodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Law.nodes.destroyById() instead.
        "prototype$__destroyById__nodes": {
          url: urlBase + "/Laws/:id/nodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Law.nodes.updateById() instead.
        "prototype$__updateById__nodes": {
          url: urlBase + "/Laws/:id/nodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Law.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Laws/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Law.discussions() instead.
        "prototype$__get__discussions": {
          isArray: true,
          url: urlBase + "/Laws/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Law.discussions.create() instead.
        "prototype$__create__discussions": {
          url: urlBase + "/Laws/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Law.discussions.destroyAll() instead.
        "prototype$__delete__discussions": {
          url: urlBase + "/Laws/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Law.discussions.count() instead.
        "prototype$__count__discussions": {
          url: urlBase + "/Laws/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Law.nodes() instead.
        "prototype$__get__nodes": {
          isArray: true,
          url: urlBase + "/Laws/:id/nodes",
          method: "GET"
        },

        // INTERNAL. Use Law.nodes.create() instead.
        "prototype$__create__nodes": {
          url: urlBase + "/Laws/:id/nodes",
          method: "POST"
        },

        // INTERNAL. Use Law.nodes.destroyAll() instead.
        "prototype$__delete__nodes": {
          url: urlBase + "/Laws/:id/nodes",
          method: "DELETE"
        },

        // INTERNAL. Use Law.nodes.count() instead.
        "prototype$__count__nodes": {
          url: urlBase + "/Laws/:id/nodes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#create
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Laws",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#upsert
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Laws",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#exists
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Laws/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#findById
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Laws/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#find
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Laws",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#findOne
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Laws/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#updateAll
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Laws/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#deleteById
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Laws/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#count
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Laws/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Laws/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#createChangeStream
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Laws/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Discussion.law() instead.
        "::get::Discussion::law": {
          url: urlBase + "/Discussions/:id/law",
          method: "GET"
        },

        // INTERNAL. Use Node.law() instead.
        "::get::Node::law": {
          url: urlBase + "/Nodes/:id/law",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#updateOrCreate
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#update
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#destroyById
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#removeById
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Law#modelName
    * @propertyOf govrightCorpusServices.Law
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Law`.
    */
    R.modelName = "Law";

    /**
     * @ngdoc object
     * @name lbServices.Law.discussions
     * @header lbServices.Law.discussions
     * @object
     * @description
     *
     * The object `Law.discussions` groups methods
     * manipulating `Discussion` instances related to `Law`.
     *
     * Call {@link lbServices.Law#discussions Law.discussions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#discussions
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Queries discussions of Law.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Law::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.discussions#count
         * @methodOf govrightCorpusServices.Law.discussions
         *
         * @description
         *
         * Counts discussions of Law.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.discussions.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::Law::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.discussions#create
         * @methodOf govrightCorpusServices.Law.discussions
         *
         * @description
         *
         * Creates a new instance in discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::Law::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.discussions#destroyAll
         * @methodOf govrightCorpusServices.Law.discussions
         *
         * @description
         *
         * Deletes all discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::Law::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.discussions#destroyById
         * @methodOf govrightCorpusServices.Law.discussions
         *
         * @description
         *
         * Delete a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::Law::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.discussions#findById
         * @methodOf govrightCorpusServices.Law.discussions
         *
         * @description
         *
         * Find a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::Law::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.discussions#updateById
         * @methodOf govrightCorpusServices.Law.discussions
         *
         * @description
         *
         * Update a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::Law::discussions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Law.nodes
     * @header lbServices.Law.nodes
     * @object
     * @description
     *
     * The object `Law.nodes` groups methods
     * manipulating `Node` instances related to `Law`.
     *
     * Call {@link lbServices.Law#nodes Law.nodes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#nodes
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Queries nodes of Law.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::get::Law::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.nodes#count
         * @methodOf govrightCorpusServices.Law.nodes
         *
         * @description
         *
         * Counts nodes of Law.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodes.count = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::count::Law::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.nodes#create
         * @methodOf govrightCorpusServices.Law.nodes
         *
         * @description
         *
         * Creates a new instance in nodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes.create = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::create::Law::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.nodes#destroyAll
         * @methodOf govrightCorpusServices.Law.nodes
         *
         * @description
         *
         * Deletes all nodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodes.destroyAll = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::delete::Law::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.nodes#destroyById
         * @methodOf govrightCorpusServices.Law.nodes
         *
         * @description
         *
         * Delete a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodes.destroyById = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::destroyById::Law::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.nodes#findById
         * @methodOf govrightCorpusServices.Law.nodes
         *
         * @description
         *
         * Find a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes.findById = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::findById::Law::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law.nodes#updateById
         * @methodOf govrightCorpusServices.Law.nodes
         *
         * @description
         *
         * Update a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes.updateById = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::updateById::Law::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Law#user
         * @methodOf govrightCorpusServices.Law
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Law::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Discussion
 * @header govrightCorpusServices.Discussion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Discussion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Discussion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Discussions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Discussion.law() instead.
        "prototype$__get__law": {
          url: urlBase + "/Discussions/:id/law",
          method: "GET"
        },

        // INTERNAL. Use Discussion.parent() instead.
        "prototype$__get__parent": {
          url: urlBase + "/Discussions/:id/parent",
          method: "GET"
        },

        // INTERNAL. Use Discussion.discussions.findById() instead.
        "prototype$__findById__discussions": {
          url: urlBase + "/Discussions/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.discussions.destroyById() instead.
        "prototype$__destroyById__discussions": {
          url: urlBase + "/Discussions/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.discussions.updateById() instead.
        "prototype$__updateById__discussions": {
          url: urlBase + "/Discussions/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Discussions/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Discussion.moderators.findById() instead.
        "prototype$__findById__moderators": {
          url: urlBase + "/Discussions/:id/moderators/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.moderators.destroyById() instead.
        "prototype$__destroyById__moderators": {
          url: urlBase + "/Discussions/:id/moderators/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.moderators.updateById() instead.
        "prototype$__updateById__moderators": {
          url: urlBase + "/Discussions/:id/moderators/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.moderators.link() instead.
        "prototype$__link__moderators": {
          url: urlBase + "/Discussions/:id/moderators/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.moderators.unlink() instead.
        "prototype$__unlink__moderators": {
          url: urlBase + "/Discussions/:id/moderators/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.moderators.exists() instead.
        "prototype$__exists__moderators": {
          url: urlBase + "/Discussions/:id/moderators/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.votes.findById() instead.
        "prototype$__findById__votes": {
          url: urlBase + "/Discussions/:id/votes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.votes.destroyById() instead.
        "prototype$__destroyById__votes": {
          url: urlBase + "/Discussions/:id/votes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.votes.updateById() instead.
        "prototype$__updateById__votes": {
          url: urlBase + "/Discussions/:id/votes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.votes.link() instead.
        "prototype$__link__votes": {
          url: urlBase + "/Discussions/:id/votes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.votes.unlink() instead.
        "prototype$__unlink__votes": {
          url: urlBase + "/Discussions/:id/votes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.votes.exists() instead.
        "prototype$__exists__votes": {
          url: urlBase + "/Discussions/:id/votes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.stats.findById() instead.
        "prototype$__findById__stats": {
          url: urlBase + "/Discussions/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.stats.destroyById() instead.
        "prototype$__destroyById__stats": {
          url: urlBase + "/Discussions/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.stats.updateById() instead.
        "prototype$__updateById__stats": {
          url: urlBase + "/Discussions/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.nodes.findById() instead.
        "prototype$__findById__nodes": {
          url: urlBase + "/Discussions/:id/nodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.nodes.destroyById() instead.
        "prototype$__destroyById__nodes": {
          url: urlBase + "/Discussions/:id/nodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.nodes.updateById() instead.
        "prototype$__updateById__nodes": {
          url: urlBase + "/Discussions/:id/nodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.nodes.link() instead.
        "prototype$__link__nodes": {
          url: urlBase + "/Discussions/:id/nodes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.nodes.unlink() instead.
        "prototype$__unlink__nodes": {
          url: urlBase + "/Discussions/:id/nodes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.nodes.exists() instead.
        "prototype$__exists__nodes": {
          url: urlBase + "/Discussions/:id/nodes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.versions.findById() instead.
        "prototype$__findById__versions": {
          url: urlBase + "/Discussions/:id/versions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.versions.destroyById() instead.
        "prototype$__destroyById__versions": {
          url: urlBase + "/Discussions/:id/versions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.versions.updateById() instead.
        "prototype$__updateById__versions": {
          url: urlBase + "/Discussions/:id/versions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.versions.link() instead.
        "prototype$__link__versions": {
          url: urlBase + "/Discussions/:id/versions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.versions.unlink() instead.
        "prototype$__unlink__versions": {
          url: urlBase + "/Discussions/:id/versions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.versions.exists() instead.
        "prototype$__exists__versions": {
          url: urlBase + "/Discussions/:id/versions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.comparisons.findById() instead.
        "prototype$__findById__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comparisons.destroyById() instead.
        "prototype$__destroyById__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comparisons.updateById() instead.
        "prototype$__updateById__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comparisons.link() instead.
        "prototype$__link__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comparisons.unlink() instead.
        "prototype$__unlink__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comparisons.exists() instead.
        "prototype$__exists__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Discussions/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Discussions/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Discussions/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comments.link() instead.
        "prototype$__link__comments": {
          url: urlBase + "/Discussions/:id/comments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comments.unlink() instead.
        "prototype$__unlink__comments": {
          url: urlBase + "/Discussions/:id/comments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comments.exists() instead.
        "prototype$__exists__comments": {
          url: urlBase + "/Discussions/:id/comments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.discussions() instead.
        "prototype$__get__discussions": {
          isArray: true,
          url: urlBase + "/Discussions/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Discussion.discussions.create() instead.
        "prototype$__create__discussions": {
          url: urlBase + "/Discussions/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Discussion.discussions.destroyAll() instead.
        "prototype$__delete__discussions": {
          url: urlBase + "/Discussions/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.discussions.count() instead.
        "prototype$__count__discussions": {
          url: urlBase + "/Discussions/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.moderators() instead.
        "prototype$__get__moderators": {
          isArray: true,
          url: urlBase + "/Discussions/:id/moderators",
          method: "GET"
        },

        // INTERNAL. Use Discussion.moderators.create() instead.
        "prototype$__create__moderators": {
          url: urlBase + "/Discussions/:id/moderators",
          method: "POST"
        },

        // INTERNAL. Use Discussion.moderators.destroyAll() instead.
        "prototype$__delete__moderators": {
          url: urlBase + "/Discussions/:id/moderators",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.moderators.count() instead.
        "prototype$__count__moderators": {
          url: urlBase + "/Discussions/:id/moderators/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.votes() instead.
        "prototype$__get__votes": {
          isArray: true,
          url: urlBase + "/Discussions/:id/votes",
          method: "GET"
        },

        // INTERNAL. Use Discussion.votes.create() instead.
        "prototype$__create__votes": {
          url: urlBase + "/Discussions/:id/votes",
          method: "POST"
        },

        // INTERNAL. Use Discussion.votes.destroyAll() instead.
        "prototype$__delete__votes": {
          url: urlBase + "/Discussions/:id/votes",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.votes.count() instead.
        "prototype$__count__votes": {
          url: urlBase + "/Discussions/:id/votes/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.stats() instead.
        "prototype$__get__stats": {
          isArray: true,
          url: urlBase + "/Discussions/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Discussion.stats.create() instead.
        "prototype$__create__stats": {
          url: urlBase + "/Discussions/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Discussion.stats.destroyAll() instead.
        "prototype$__delete__stats": {
          url: urlBase + "/Discussions/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.stats.count() instead.
        "prototype$__count__stats": {
          url: urlBase + "/Discussions/:id/stats/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.nodes() instead.
        "prototype$__get__nodes": {
          isArray: true,
          url: urlBase + "/Discussions/:id/nodes",
          method: "GET"
        },

        // INTERNAL. Use Discussion.nodes.create() instead.
        "prototype$__create__nodes": {
          url: urlBase + "/Discussions/:id/nodes",
          method: "POST"
        },

        // INTERNAL. Use Discussion.nodes.destroyAll() instead.
        "prototype$__delete__nodes": {
          url: urlBase + "/Discussions/:id/nodes",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.nodes.count() instead.
        "prototype$__count__nodes": {
          url: urlBase + "/Discussions/:id/nodes/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.versions() instead.
        "prototype$__get__versions": {
          isArray: true,
          url: urlBase + "/Discussions/:id/versions",
          method: "GET"
        },

        // INTERNAL. Use Discussion.versions.create() instead.
        "prototype$__create__versions": {
          url: urlBase + "/Discussions/:id/versions",
          method: "POST"
        },

        // INTERNAL. Use Discussion.versions.destroyAll() instead.
        "prototype$__delete__versions": {
          url: urlBase + "/Discussions/:id/versions",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.versions.count() instead.
        "prototype$__count__versions": {
          url: urlBase + "/Discussions/:id/versions/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comparisons() instead.
        "prototype$__get__comparisons": {
          isArray: true,
          url: urlBase + "/Discussions/:id/comparisons",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comparisons.create() instead.
        "prototype$__create__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons",
          method: "POST"
        },

        // INTERNAL. Use Discussion.comparisons.destroyAll() instead.
        "prototype$__delete__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comparisons.count() instead.
        "prototype$__count__comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Discussions/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Discussions/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Discussion.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Discussions/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Discussions/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#create
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Discussions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#upsert
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Discussions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#exists
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Discussions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#findById
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Discussions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#find
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Discussions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#findOne
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Discussions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#updateAll
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Discussions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#deleteById
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Discussions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#count
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Discussions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Discussions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#createChangeStream
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Discussions/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#findPackage
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Search for a packaged Discussion by special criteria
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `domain` – `{string=}` - 
         *
         *  - `law` – `{string=}` - 
         *
         *  - `slug` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "findPackage": {
          url: urlBase + "/Discussions/package",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#prototype$package
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Retrieve a packaged Discussion
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$package": {
          url: urlBase + "/Discussions/:id/packaged",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#prototype$searchVersions
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Get versions by parameters. sort - recent / top-voted / top-commented / lb order filter; limit - number of records to return; skip - number of records to skip; node - node id; type - version type, original (default) isOriginal=true / revision isOriginal=false / all; 
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `sort` – `{string=}` - 
         *
         *  - `limit` – `{number=}` - 
         *
         *  - `skip` – `{number=}` - 
         *
         *  - `node` – `{string=}` - 
         *
         *  - `type` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$searchVersions": {
          isArray: true,
          url: urlBase + "/Discussions/:id/search/versions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#prototype$searchComments
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Get comments by parameters. status - limit to a specific status; sort - recent / top-voted / top-commented / lb order filter; limit - number of records to return; skip - number of records to skip; version - version id; userVotes - bool, include current user votes for each comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `status` – `{string=}` - 
         *
         *  - `sort` – `{string=}` - 
         *
         *  - `limit` – `{number=}` - 
         *
         *  - `skip` – `{number=}` - 
         *
         *  - `version` – `{string=}` - 
         *
         *  - `userVotes` – `{boolean=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$searchComments": {
          isArray: true,
          url: urlBase + "/Discussions/:id/search/comments",
          method: "GET"
        },

        // INTERNAL. Use Law.discussions.findById() instead.
        "::findById::Law::discussions": {
          url: urlBase + "/Laws/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Law.discussions.destroyById() instead.
        "::destroyById::Law::discussions": {
          url: urlBase + "/Laws/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Law.discussions.updateById() instead.
        "::updateById::Law::discussions": {
          url: urlBase + "/Laws/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Law.discussions() instead.
        "::get::Law::discussions": {
          isArray: true,
          url: urlBase + "/Laws/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Law.discussions.create() instead.
        "::create::Law::discussions": {
          url: urlBase + "/Laws/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Law.discussions.destroyAll() instead.
        "::delete::Law::discussions": {
          url: urlBase + "/Laws/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Law.discussions.count() instead.
        "::count::Law::discussions": {
          url: urlBase + "/Laws/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.parent() instead.
        "::get::Discussion::parent": {
          url: urlBase + "/Discussions/:id/parent",
          method: "GET"
        },

        // INTERNAL. Use Discussion.discussions.findById() instead.
        "::findById::Discussion::discussions": {
          url: urlBase + "/Discussions/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.discussions.destroyById() instead.
        "::destroyById::Discussion::discussions": {
          url: urlBase + "/Discussions/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.discussions.updateById() instead.
        "::updateById::Discussion::discussions": {
          url: urlBase + "/Discussions/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.discussions() instead.
        "::get::Discussion::discussions": {
          isArray: true,
          url: urlBase + "/Discussions/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Discussion.discussions.create() instead.
        "::create::Discussion::discussions": {
          url: urlBase + "/Discussions/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Discussion.discussions.destroyAll() instead.
        "::delete::Discussion::discussions": {
          url: urlBase + "/Discussions/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.discussions.count() instead.
        "::count::Discussion::discussions": {
          url: urlBase + "/Discussions/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Node.discussions.findById() instead.
        "::findById::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.discussions.destroyById() instead.
        "::destroyById::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.discussions.updateById() instead.
        "::updateById::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.discussions.link() instead.
        "::link::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.discussions.unlink() instead.
        "::unlink::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.discussions.exists() instead.
        "::exists::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Node.discussions() instead.
        "::get::Node::discussions": {
          isArray: true,
          url: urlBase + "/Nodes/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Node.discussions.create() instead.
        "::create::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Node.discussions.destroyAll() instead.
        "::delete::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Node.discussions.count() instead.
        "::count::Node::discussions": {
          url: urlBase + "/Nodes/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Version.discussions.findById() instead.
        "::findById::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.discussions.destroyById() instead.
        "::destroyById::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.discussions.updateById() instead.
        "::updateById::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.discussions.link() instead.
        "::link::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.discussions.unlink() instead.
        "::unlink::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.discussions.exists() instead.
        "::exists::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Version.discussions() instead.
        "::get::Version::discussions": {
          isArray: true,
          url: urlBase + "/Versions/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Version.discussions.create() instead.
        "::create::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Version.discussions.destroyAll() instead.
        "::delete::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Version.discussions.count() instead.
        "::count::Version::discussions": {
          url: urlBase + "/Versions/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.discussions.findById() instead.
        "::findById::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.discussions.destroyById() instead.
        "::destroyById::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.discussions.updateById() instead.
        "::updateById::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.discussions.link() instead.
        "::link::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.discussions.unlink() instead.
        "::unlink::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.discussions.exists() instead.
        "::exists::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Comment.discussions() instead.
        "::get::Comment::discussions": {
          isArray: true,
          url: urlBase + "/Comments/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Comment.discussions.create() instead.
        "::create::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Comment.discussions.destroyAll() instead.
        "::delete::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.discussions.count() instead.
        "::count::Comment::discussions": {
          url: urlBase + "/Comments/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Vote.discussions.findById() instead.
        "::findById::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vote.discussions.destroyById() instead.
        "::destroyById::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.discussions.updateById() instead.
        "::updateById::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vote.discussions.link() instead.
        "::link::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vote.discussions.unlink() instead.
        "::unlink::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.discussions.exists() instead.
        "::exists::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Vote.discussions() instead.
        "::get::Vote::discussions": {
          isArray: true,
          url: urlBase + "/Votes/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Vote.discussions.create() instead.
        "::create::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Vote.discussions.destroyAll() instead.
        "::delete::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.discussions.count() instead.
        "::count::Vote::discussions": {
          url: urlBase + "/Votes/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Comparison.discussions.findById() instead.
        "::findById::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comparison.discussions.destroyById() instead.
        "::destroyById::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.discussions.updateById() instead.
        "::updateById::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comparison.discussions.link() instead.
        "::link::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comparison.discussions.unlink() instead.
        "::unlink::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.discussions.exists() instead.
        "::exists::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Comparison.discussions() instead.
        "::get::Comparison::discussions": {
          isArray: true,
          url: urlBase + "/Comparisons/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Comparison.discussions.create() instead.
        "::create::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Comparison.discussions.destroyAll() instead.
        "::delete::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.discussions.count() instead.
        "::count::Comparison::discussions": {
          url: urlBase + "/Comparisons/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Contribution.discussion() instead.
        "::get::Contribution::discussion": {
          url: urlBase + "/Contributions/:id/discussion",
          method: "GET"
        },

        // INTERNAL. Use User.moderating.findById() instead.
        "::findById::user::moderating": {
          url: urlBase + "/Users/:id/moderating/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.moderating.destroyById() instead.
        "::destroyById::user::moderating": {
          url: urlBase + "/Users/:id/moderating/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.moderating.updateById() instead.
        "::updateById::user::moderating": {
          url: urlBase + "/Users/:id/moderating/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.moderating.link() instead.
        "::link::user::moderating": {
          url: urlBase + "/Users/:id/moderating/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.moderating.unlink() instead.
        "::unlink::user::moderating": {
          url: urlBase + "/Users/:id/moderating/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.moderating.exists() instead.
        "::exists::user::moderating": {
          url: urlBase + "/Users/:id/moderating/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use User.moderating() instead.
        "::get::user::moderating": {
          isArray: true,
          url: urlBase + "/Users/:id/moderating",
          method: "GET"
        },

        // INTERNAL. Use User.moderating.create() instead.
        "::create::user::moderating": {
          url: urlBase + "/Users/:id/moderating",
          method: "POST"
        },

        // INTERNAL. Use User.moderating.destroyAll() instead.
        "::delete::user::moderating": {
          url: urlBase + "/Users/:id/moderating",
          method: "DELETE"
        },

        // INTERNAL. Use User.moderating.count() instead.
        "::count::user::moderating": {
          url: urlBase + "/Users/:id/moderating/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#updateOrCreate
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#update
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#destroyById
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#removeById
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Discussion#modelName
    * @propertyOf govrightCorpusServices.Discussion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Discussion`.
    */
    R.modelName = "Discussion";


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#law
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Fetches belongsTo relation law.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        R.law = function() {
          var TargetResource = $injector.get("Law");
          var action = TargetResource["::get::Discussion::law"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#parent
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Fetches belongsTo relation parent.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.parent = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Discussion::parent"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.discussions
     * @header lbServices.Discussion.discussions
     * @object
     * @description
     *
     * The object `Discussion.discussions` groups methods
     * manipulating `Discussion` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#discussions Discussion.discussions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#discussions
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries discussions of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Discussion::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.discussions#count
         * @methodOf govrightCorpusServices.Discussion.discussions
         *
         * @description
         *
         * Counts discussions of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.discussions.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::Discussion::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.discussions#create
         * @methodOf govrightCorpusServices.Discussion.discussions
         *
         * @description
         *
         * Creates a new instance in discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::Discussion::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.discussions#destroyAll
         * @methodOf govrightCorpusServices.Discussion.discussions
         *
         * @description
         *
         * Deletes all discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::Discussion::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.discussions#destroyById
         * @methodOf govrightCorpusServices.Discussion.discussions
         *
         * @description
         *
         * Delete a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::Discussion::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.discussions#findById
         * @methodOf govrightCorpusServices.Discussion.discussions
         *
         * @description
         *
         * Find a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::Discussion::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.discussions#updateById
         * @methodOf govrightCorpusServices.Discussion.discussions
         *
         * @description
         *
         * Update a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::Discussion::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#user
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Discussion::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.moderators
     * @header lbServices.Discussion.moderators
     * @object
     * @description
     *
     * The object `Discussion.moderators` groups methods
     * manipulating `User` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#moderators Discussion.moderators()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#moderators
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries moderators of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderators = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#count
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Counts moderators of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.moderators.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#create
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Creates a new instance in moderators of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderators.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#destroyAll
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Deletes all moderators of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.moderators.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#destroyById
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Delete a related item by id for moderators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for moderators
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.moderators.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#exists
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Check the existence of moderators relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for moderators
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderators.exists = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::exists::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#findById
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Find a related item by id for moderators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for moderators
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderators.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#link
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Add a related item by id for moderators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for moderators
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderators.link = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::link::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#unlink
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Remove the moderators relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for moderators
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.moderators.unlink = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::unlink::Discussion::moderators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.moderators#updateById
         * @methodOf govrightCorpusServices.Discussion.moderators
         *
         * @description
         *
         * Update a related item by id for moderators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for moderators
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderators.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::Discussion::moderators"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.votes
     * @header lbServices.Discussion.votes
     * @object
     * @description
     *
     * The object `Discussion.votes` groups methods
     * manipulating `Contribution` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#votes Discussion.votes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#votes
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries votes of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.votes = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#count
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Counts votes of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.votes.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#create
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Creates a new instance in votes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.votes.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#destroyAll
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Deletes all votes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.votes.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#destroyById
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Delete a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.votes.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#exists
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Check the existence of votes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.votes.exists = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::exists::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#findById
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Find a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.votes.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#link
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Add a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.votes.link = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::link::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#unlink
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Remove the votes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.votes.unlink = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::unlink::Discussion::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.votes#updateById
         * @methodOf govrightCorpusServices.Discussion.votes
         *
         * @description
         *
         * Update a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.votes.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Discussion::votes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.stats
     * @header lbServices.Discussion.stats
     * @object
     * @description
     *
     * The object `Discussion.stats` groups methods
     * manipulating `Contribution` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#stats Discussion.stats()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#stats
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries stats of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Discussion::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.stats#count
         * @methodOf govrightCorpusServices.Discussion.stats
         *
         * @description
         *
         * Counts stats of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stats.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Discussion::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.stats#create
         * @methodOf govrightCorpusServices.Discussion.stats
         *
         * @description
         *
         * Creates a new instance in stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Discussion::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.stats#destroyAll
         * @methodOf govrightCorpusServices.Discussion.stats
         *
         * @description
         *
         * Deletes all stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Discussion::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.stats#destroyById
         * @methodOf govrightCorpusServices.Discussion.stats
         *
         * @description
         *
         * Delete a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Discussion::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.stats#findById
         * @methodOf govrightCorpusServices.Discussion.stats
         *
         * @description
         *
         * Find a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Discussion::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.stats#updateById
         * @methodOf govrightCorpusServices.Discussion.stats
         *
         * @description
         *
         * Update a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Discussion::stats"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.nodes
     * @header lbServices.Discussion.nodes
     * @object
     * @description
     *
     * The object `Discussion.nodes` groups methods
     * manipulating `Contribution` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#nodes Discussion.nodes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#nodes
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries nodes of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.nodes = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#count
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Counts nodes of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodes.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#create
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Creates a new instance in nodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.nodes.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#destroyAll
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Deletes all nodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodes.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#destroyById
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Delete a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodes.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#exists
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Check the existence of nodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.nodes.exists = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::exists::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#findById
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Find a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.nodes.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#link
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Add a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.nodes.link = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::link::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#unlink
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Remove the nodes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodes.unlink = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::unlink::Discussion::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.nodes#updateById
         * @methodOf govrightCorpusServices.Discussion.nodes
         *
         * @description
         *
         * Update a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.nodes.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Discussion::nodes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.versions
     * @header lbServices.Discussion.versions
     * @object
     * @description
     *
     * The object `Discussion.versions` groups methods
     * manipulating `Contribution` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#versions Discussion.versions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#versions
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries versions of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.versions = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#count
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Counts versions of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.versions.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#create
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Creates a new instance in versions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.versions.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#destroyAll
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Deletes all versions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.versions.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#destroyById
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Delete a related item by id for versions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.versions.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#exists
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Check the existence of versions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.versions.exists = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::exists::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#findById
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Find a related item by id for versions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.versions.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#link
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Add a related item by id for versions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.versions.link = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::link::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#unlink
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Remove the versions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.versions.unlink = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::unlink::Discussion::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.versions#updateById
         * @methodOf govrightCorpusServices.Discussion.versions
         *
         * @description
         *
         * Update a related item by id for versions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.versions.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Discussion::versions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.comparisons
     * @header lbServices.Discussion.comparisons
     * @object
     * @description
     *
     * The object `Discussion.comparisons` groups methods
     * manipulating `Contribution` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#comparisons Discussion.comparisons()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#comparisons
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries comparisons of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comparisons = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#count
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Counts comparisons of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comparisons.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#create
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Creates a new instance in comparisons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comparisons.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#destroyAll
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Deletes all comparisons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comparisons.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#destroyById
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Delete a related item by id for comparisons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comparisons.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#exists
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Check the existence of comparisons relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comparisons.exists = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::exists::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#findById
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Find a related item by id for comparisons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comparisons.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#link
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Add a related item by id for comparisons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comparisons.link = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::link::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#unlink
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Remove the comparisons relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comparisons.unlink = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::unlink::Discussion::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comparisons#updateById
         * @methodOf govrightCorpusServices.Discussion.comparisons
         *
         * @description
         *
         * Update a related item by id for comparisons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comparisons.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Discussion::comparisons"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.comments
     * @header lbServices.Discussion.comments
     * @object
     * @description
     *
     * The object `Discussion.comments` groups methods
     * manipulating `Contribution` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#comments Discussion.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion#comments
         * @methodOf govrightCorpusServices.Discussion
         *
         * @description
         *
         * Queries comments of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#count
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Counts comments of Discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#create
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#destroyAll
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#destroyById
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#exists
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Check the existence of comments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comments.exists = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::exists::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#findById
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#link
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Add a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comments.link = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::link::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#unlink
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Remove the comments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.unlink = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::unlink::Discussion::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Discussion.comments#updateById
         * @methodOf govrightCorpusServices.Discussion.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Discussion::comments"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Node
 * @header govrightCorpusServices.Node
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Node` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Node",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Nodes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Node.law() instead.
        "prototype$__get__law": {
          url: urlBase + "/Nodes/:id/law",
          method: "GET"
        },

        // INTERNAL. Use Node.parent() instead.
        "prototype$__get__parent": {
          url: urlBase + "/Nodes/:id/parent",
          method: "GET"
        },

        // INTERNAL. Use Node.nodes.findById() instead.
        "prototype$__findById__nodes": {
          url: urlBase + "/Nodes/:id/nodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.nodes.destroyById() instead.
        "prototype$__destroyById__nodes": {
          url: urlBase + "/Nodes/:id/nodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.nodes.updateById() instead.
        "prototype$__updateById__nodes": {
          url: urlBase + "/Nodes/:id/nodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.original() instead.
        "prototype$__get__original": {
          url: urlBase + "/Nodes/:id/original",
          method: "GET"
        },

        // INTERNAL. Use Node.original.create() instead.
        "prototype$__create__original": {
          url: urlBase + "/Nodes/:id/original",
          method: "POST"
        },

        // INTERNAL. Use Node.original.update() instead.
        "prototype$__update__original": {
          url: urlBase + "/Nodes/:id/original",
          method: "PUT"
        },

        // INTERNAL. Use Node.original.destroy() instead.
        "prototype$__destroy__original": {
          url: urlBase + "/Nodes/:id/original",
          method: "DELETE"
        },

        // INTERNAL. Use Node.versions.findById() instead.
        "prototype$__findById__versions": {
          url: urlBase + "/Nodes/:id/versions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.versions.destroyById() instead.
        "prototype$__destroyById__versions": {
          url: urlBase + "/Nodes/:id/versions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.versions.updateById() instead.
        "prototype$__updateById__versions": {
          url: urlBase + "/Nodes/:id/versions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.comparisons.findById() instead.
        "prototype$__findById__comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.comparisons.destroyById() instead.
        "prototype$__destroyById__comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.comparisons.updateById() instead.
        "prototype$__updateById__comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Nodes/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Node.discussions.findById() instead.
        "prototype$__findById__discussions": {
          url: urlBase + "/Nodes/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.discussions.destroyById() instead.
        "prototype$__destroyById__discussions": {
          url: urlBase + "/Nodes/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.discussions.updateById() instead.
        "prototype$__updateById__discussions": {
          url: urlBase + "/Nodes/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.discussions.link() instead.
        "prototype$__link__discussions": {
          url: urlBase + "/Nodes/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.discussions.unlink() instead.
        "prototype$__unlink__discussions": {
          url: urlBase + "/Nodes/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.discussions.exists() instead.
        "prototype$__exists__discussions": {
          url: urlBase + "/Nodes/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Node.stats.findById() instead.
        "prototype$__findById__stats": {
          url: urlBase + "/Nodes/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.stats.destroyById() instead.
        "prototype$__destroyById__stats": {
          url: urlBase + "/Nodes/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.stats.updateById() instead.
        "prototype$__updateById__stats": {
          url: urlBase + "/Nodes/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.nodes() instead.
        "prototype$__get__nodes": {
          isArray: true,
          url: urlBase + "/Nodes/:id/nodes",
          method: "GET"
        },

        // INTERNAL. Use Node.nodes.create() instead.
        "prototype$__create__nodes": {
          url: urlBase + "/Nodes/:id/nodes",
          method: "POST"
        },

        // INTERNAL. Use Node.nodes.destroyAll() instead.
        "prototype$__delete__nodes": {
          url: urlBase + "/Nodes/:id/nodes",
          method: "DELETE"
        },

        // INTERNAL. Use Node.nodes.count() instead.
        "prototype$__count__nodes": {
          url: urlBase + "/Nodes/:id/nodes/count",
          method: "GET"
        },

        // INTERNAL. Use Node.versions() instead.
        "prototype$__get__versions": {
          isArray: true,
          url: urlBase + "/Nodes/:id/versions",
          method: "GET"
        },

        // INTERNAL. Use Node.versions.create() instead.
        "prototype$__create__versions": {
          url: urlBase + "/Nodes/:id/versions",
          method: "POST"
        },

        // INTERNAL. Use Node.versions.destroyAll() instead.
        "prototype$__delete__versions": {
          url: urlBase + "/Nodes/:id/versions",
          method: "DELETE"
        },

        // INTERNAL. Use Node.versions.count() instead.
        "prototype$__count__versions": {
          url: urlBase + "/Nodes/:id/versions/count",
          method: "GET"
        },

        // INTERNAL. Use Node.comparisons() instead.
        "prototype$__get__comparisons": {
          isArray: true,
          url: urlBase + "/Nodes/:id/comparisons",
          method: "GET"
        },

        // INTERNAL. Use Node.comparisons.create() instead.
        "prototype$__create__comparisons": {
          url: urlBase + "/Nodes/:id/comparisons",
          method: "POST"
        },

        // INTERNAL. Use Node.comparisons.destroyAll() instead.
        "prototype$__delete__comparisons": {
          url: urlBase + "/Nodes/:id/comparisons",
          method: "DELETE"
        },

        // INTERNAL. Use Node.comparisons.count() instead.
        "prototype$__count__comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/count",
          method: "GET"
        },

        // INTERNAL. Use Node.discussions() instead.
        "prototype$__get__discussions": {
          isArray: true,
          url: urlBase + "/Nodes/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Node.discussions.create() instead.
        "prototype$__create__discussions": {
          url: urlBase + "/Nodes/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Node.discussions.destroyAll() instead.
        "prototype$__delete__discussions": {
          url: urlBase + "/Nodes/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Node.discussions.count() instead.
        "prototype$__count__discussions": {
          url: urlBase + "/Nodes/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Node.stats() instead.
        "prototype$__get__stats": {
          isArray: true,
          url: urlBase + "/Nodes/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Node.stats.create() instead.
        "prototype$__create__stats": {
          url: urlBase + "/Nodes/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Node.stats.destroyAll() instead.
        "prototype$__delete__stats": {
          url: urlBase + "/Nodes/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Node.stats.count() instead.
        "prototype$__count__stats": {
          url: urlBase + "/Nodes/:id/stats/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#create
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Nodes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#upsert
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Nodes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#exists
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Nodes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#findById
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Nodes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#find
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Nodes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#findOne
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Nodes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#updateAll
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Nodes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#deleteById
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Nodes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#count
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Nodes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Nodes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#createChangeStream
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Nodes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Law.nodes.findById() instead.
        "::findById::Law::nodes": {
          url: urlBase + "/Laws/:id/nodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Law.nodes.destroyById() instead.
        "::destroyById::Law::nodes": {
          url: urlBase + "/Laws/:id/nodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Law.nodes.updateById() instead.
        "::updateById::Law::nodes": {
          url: urlBase + "/Laws/:id/nodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Law.nodes() instead.
        "::get::Law::nodes": {
          isArray: true,
          url: urlBase + "/Laws/:id/nodes",
          method: "GET"
        },

        // INTERNAL. Use Law.nodes.create() instead.
        "::create::Law::nodes": {
          url: urlBase + "/Laws/:id/nodes",
          method: "POST"
        },

        // INTERNAL. Use Law.nodes.destroyAll() instead.
        "::delete::Law::nodes": {
          url: urlBase + "/Laws/:id/nodes",
          method: "DELETE"
        },

        // INTERNAL. Use Law.nodes.count() instead.
        "::count::Law::nodes": {
          url: urlBase + "/Laws/:id/nodes/count",
          method: "GET"
        },

        // INTERNAL. Use Node.parent() instead.
        "::get::Node::parent": {
          url: urlBase + "/Nodes/:id/parent",
          method: "GET"
        },

        // INTERNAL. Use Node.nodes.findById() instead.
        "::findById::Node::nodes": {
          url: urlBase + "/Nodes/:id/nodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.nodes.destroyById() instead.
        "::destroyById::Node::nodes": {
          url: urlBase + "/Nodes/:id/nodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.nodes.updateById() instead.
        "::updateById::Node::nodes": {
          url: urlBase + "/Nodes/:id/nodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.nodes() instead.
        "::get::Node::nodes": {
          isArray: true,
          url: urlBase + "/Nodes/:id/nodes",
          method: "GET"
        },

        // INTERNAL. Use Node.nodes.create() instead.
        "::create::Node::nodes": {
          url: urlBase + "/Nodes/:id/nodes",
          method: "POST"
        },

        // INTERNAL. Use Node.nodes.destroyAll() instead.
        "::delete::Node::nodes": {
          url: urlBase + "/Nodes/:id/nodes",
          method: "DELETE"
        },

        // INTERNAL. Use Node.nodes.count() instead.
        "::count::Node::nodes": {
          url: urlBase + "/Nodes/:id/nodes/count",
          method: "GET"
        },

        // INTERNAL. Use Version.node() instead.
        "::get::Version::node": {
          url: urlBase + "/Versions/:id/node",
          method: "GET"
        },

        // INTERNAL. Use Comparison.node() instead.
        "::get::Comparison::node": {
          url: urlBase + "/Comparisons/:id/node",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#updateOrCreate
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#update
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#destroyById
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#removeById
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Node#modelName
    * @propertyOf govrightCorpusServices.Node
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Node`.
    */
    R.modelName = "Node";


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#law
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Fetches belongsTo relation law.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Law` object.)
         * </em>
         */
        R.law = function() {
          var TargetResource = $injector.get("Law");
          var action = TargetResource["::get::Node::law"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#parent
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Fetches belongsTo relation parent.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.parent = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::get::Node::parent"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Node.nodes
     * @header lbServices.Node.nodes
     * @object
     * @description
     *
     * The object `Node.nodes` groups methods
     * manipulating `Node` instances related to `Node`.
     *
     * Call {@link lbServices.Node#nodes Node.nodes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#nodes
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Queries nodes of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::get::Node::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.nodes#count
         * @methodOf govrightCorpusServices.Node.nodes
         *
         * @description
         *
         * Counts nodes of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.nodes.count = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::count::Node::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.nodes#create
         * @methodOf govrightCorpusServices.Node.nodes
         *
         * @description
         *
         * Creates a new instance in nodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes.create = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::create::Node::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.nodes#destroyAll
         * @methodOf govrightCorpusServices.Node.nodes
         *
         * @description
         *
         * Deletes all nodes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodes.destroyAll = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::delete::Node::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.nodes#destroyById
         * @methodOf govrightCorpusServices.Node.nodes
         *
         * @description
         *
         * Delete a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.nodes.destroyById = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::destroyById::Node::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.nodes#findById
         * @methodOf govrightCorpusServices.Node.nodes
         *
         * @description
         *
         * Find a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes.findById = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::findById::Node::nodes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.nodes#updateById
         * @methodOf govrightCorpusServices.Node.nodes
         *
         * @description
         *
         * Update a related item by id for nodes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for nodes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.nodes.updateById = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::updateById::Node::nodes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Node.original
     * @header lbServices.Node.original
     * @object
     * @description
     *
     * The object `Node.original` groups methods
     * manipulating `Version` instances related to `Node`.
     *
     * Call {@link lbServices.Node#original Node.original()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#original
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Fetches hasOne relation original.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.original = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::get::Node::original"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.original#create
         * @methodOf govrightCorpusServices.Node.original
         *
         * @description
         *
         * Creates a new instance in original of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.original.create = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::create::Node::original"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.original#destroy
         * @methodOf govrightCorpusServices.Node.original
         *
         * @description
         *
         * Deletes original of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.original.destroy = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::destroy::Node::original"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.original#update
         * @methodOf govrightCorpusServices.Node.original
         *
         * @description
         *
         * Update original of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.original.update = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::update::Node::original"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Node.versions
     * @header lbServices.Node.versions
     * @object
     * @description
     *
     * The object `Node.versions` groups methods
     * manipulating `Version` instances related to `Node`.
     *
     * Call {@link lbServices.Node#versions Node.versions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#versions
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Queries versions of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.versions = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::get::Node::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.versions#count
         * @methodOf govrightCorpusServices.Node.versions
         *
         * @description
         *
         * Counts versions of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.versions.count = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::count::Node::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.versions#create
         * @methodOf govrightCorpusServices.Node.versions
         *
         * @description
         *
         * Creates a new instance in versions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.versions.create = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::create::Node::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.versions#destroyAll
         * @methodOf govrightCorpusServices.Node.versions
         *
         * @description
         *
         * Deletes all versions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.versions.destroyAll = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::delete::Node::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.versions#destroyById
         * @methodOf govrightCorpusServices.Node.versions
         *
         * @description
         *
         * Delete a related item by id for versions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.versions.destroyById = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::destroyById::Node::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.versions#findById
         * @methodOf govrightCorpusServices.Node.versions
         *
         * @description
         *
         * Find a related item by id for versions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.versions.findById = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::findById::Node::versions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.versions#updateById
         * @methodOf govrightCorpusServices.Node.versions
         *
         * @description
         *
         * Update a related item by id for versions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for versions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.versions.updateById = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::updateById::Node::versions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Node.comparisons
     * @header lbServices.Node.comparisons
     * @object
     * @description
     *
     * The object `Node.comparisons` groups methods
     * manipulating `Comparison` instances related to `Node`.
     *
     * Call {@link lbServices.Node#comparisons Node.comparisons()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#comparisons
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Queries comparisons of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        R.comparisons = function() {
          var TargetResource = $injector.get("Comparison");
          var action = TargetResource["::get::Node::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.comparisons#count
         * @methodOf govrightCorpusServices.Node.comparisons
         *
         * @description
         *
         * Counts comparisons of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comparisons.count = function() {
          var TargetResource = $injector.get("Comparison");
          var action = TargetResource["::count::Node::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.comparisons#create
         * @methodOf govrightCorpusServices.Node.comparisons
         *
         * @description
         *
         * Creates a new instance in comparisons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        R.comparisons.create = function() {
          var TargetResource = $injector.get("Comparison");
          var action = TargetResource["::create::Node::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.comparisons#destroyAll
         * @methodOf govrightCorpusServices.Node.comparisons
         *
         * @description
         *
         * Deletes all comparisons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comparisons.destroyAll = function() {
          var TargetResource = $injector.get("Comparison");
          var action = TargetResource["::delete::Node::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.comparisons#destroyById
         * @methodOf govrightCorpusServices.Node.comparisons
         *
         * @description
         *
         * Delete a related item by id for comparisons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comparisons.destroyById = function() {
          var TargetResource = $injector.get("Comparison");
          var action = TargetResource["::destroyById::Node::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.comparisons#findById
         * @methodOf govrightCorpusServices.Node.comparisons
         *
         * @description
         *
         * Find a related item by id for comparisons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        R.comparisons.findById = function() {
          var TargetResource = $injector.get("Comparison");
          var action = TargetResource["::findById::Node::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.comparisons#updateById
         * @methodOf govrightCorpusServices.Node.comparisons
         *
         * @description
         *
         * Update a related item by id for comparisons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comparisons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        R.comparisons.updateById = function() {
          var TargetResource = $injector.get("Comparison");
          var action = TargetResource["::updateById::Node::comparisons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#user
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Node::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Node.discussions
     * @header lbServices.Node.discussions
     * @object
     * @description
     *
     * The object `Node.discussions` groups methods
     * manipulating `Discussion` instances related to `Node`.
     *
     * Call {@link lbServices.Node#discussions Node.discussions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#discussions
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Queries discussions of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#count
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Counts discussions of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.discussions.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#create
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Creates a new instance in discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#destroyAll
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Deletes all discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#destroyById
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Delete a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#exists
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Check the existence of discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.exists = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::exists::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#findById
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Find a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#link
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Add a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.link = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::link::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#unlink
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Remove the discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.unlink = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::unlink::Node::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.discussions#updateById
         * @methodOf govrightCorpusServices.Node.discussions
         *
         * @description
         *
         * Update a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::Node::discussions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Node.stats
     * @header lbServices.Node.stats
     * @object
     * @description
     *
     * The object `Node.stats` groups methods
     * manipulating `Contribution` instances related to `Node`.
     *
     * Call {@link lbServices.Node#stats Node.stats()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node#stats
         * @methodOf govrightCorpusServices.Node
         *
         * @description
         *
         * Queries stats of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Node::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.stats#count
         * @methodOf govrightCorpusServices.Node.stats
         *
         * @description
         *
         * Counts stats of Node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stats.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Node::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.stats#create
         * @methodOf govrightCorpusServices.Node.stats
         *
         * @description
         *
         * Creates a new instance in stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Node::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.stats#destroyAll
         * @methodOf govrightCorpusServices.Node.stats
         *
         * @description
         *
         * Deletes all stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Node::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.stats#destroyById
         * @methodOf govrightCorpusServices.Node.stats
         *
         * @description
         *
         * Delete a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Node::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.stats#findById
         * @methodOf govrightCorpusServices.Node.stats
         *
         * @description
         *
         * Find a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Node::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Node.stats#updateById
         * @methodOf govrightCorpusServices.Node.stats
         *
         * @description
         *
         * Update a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Node::stats"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Version
 * @header govrightCorpusServices.Version
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Version` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Version",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Versions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Version.node() instead.
        "prototype$__get__node": {
          url: urlBase + "/Versions/:id/node",
          method: "GET"
        },

        // INTERNAL. Use Version.comments.findById() instead.
        "prototype$__findById__comments": {
          url: urlBase + "/Versions/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          url: urlBase + "/Versions/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.comments.updateById() instead.
        "prototype$__updateById__comments": {
          url: urlBase + "/Versions/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Versions/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Version.votes.findById() instead.
        "prototype$__findById__votes": {
          url: urlBase + "/Versions/:id/votes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.votes.destroyById() instead.
        "prototype$__destroyById__votes": {
          url: urlBase + "/Versions/:id/votes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.votes.updateById() instead.
        "prototype$__updateById__votes": {
          url: urlBase + "/Versions/:id/votes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.discussions.findById() instead.
        "prototype$__findById__discussions": {
          url: urlBase + "/Versions/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.discussions.destroyById() instead.
        "prototype$__destroyById__discussions": {
          url: urlBase + "/Versions/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.discussions.updateById() instead.
        "prototype$__updateById__discussions": {
          url: urlBase + "/Versions/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.discussions.link() instead.
        "prototype$__link__discussions": {
          url: urlBase + "/Versions/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.discussions.unlink() instead.
        "prototype$__unlink__discussions": {
          url: urlBase + "/Versions/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.discussions.exists() instead.
        "prototype$__exists__discussions": {
          url: urlBase + "/Versions/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Version.stats.findById() instead.
        "prototype$__findById__stats": {
          url: urlBase + "/Versions/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.stats.destroyById() instead.
        "prototype$__destroyById__stats": {
          url: urlBase + "/Versions/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.stats.updateById() instead.
        "prototype$__updateById__stats": {
          url: urlBase + "/Versions/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.moderator() instead.
        "prototype$__get__moderator": {
          url: urlBase + "/Versions/:id/moderator",
          method: "GET"
        },

        // INTERNAL. Use Version.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Versions/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Version.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Versions/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Version.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Versions/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Version.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Versions/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Version.votes() instead.
        "prototype$__get__votes": {
          isArray: true,
          url: urlBase + "/Versions/:id/votes",
          method: "GET"
        },

        // INTERNAL. Use Version.votes.destroyAll() instead.
        "prototype$__delete__votes": {
          url: urlBase + "/Versions/:id/votes",
          method: "DELETE"
        },

        // INTERNAL. Use Version.votes.count() instead.
        "prototype$__count__votes": {
          url: urlBase + "/Versions/:id/votes/count",
          method: "GET"
        },

        // INTERNAL. Use Version.discussions() instead.
        "prototype$__get__discussions": {
          isArray: true,
          url: urlBase + "/Versions/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Version.discussions.create() instead.
        "prototype$__create__discussions": {
          url: urlBase + "/Versions/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Version.discussions.destroyAll() instead.
        "prototype$__delete__discussions": {
          url: urlBase + "/Versions/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Version.discussions.count() instead.
        "prototype$__count__discussions": {
          url: urlBase + "/Versions/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Version.stats() instead.
        "prototype$__get__stats": {
          isArray: true,
          url: urlBase + "/Versions/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Version.stats.create() instead.
        "prototype$__create__stats": {
          url: urlBase + "/Versions/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Version.stats.destroyAll() instead.
        "prototype$__delete__stats": {
          url: urlBase + "/Versions/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Version.stats.count() instead.
        "prototype$__count__stats": {
          url: urlBase + "/Versions/:id/stats/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#create
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Versions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#upsert
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Versions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#exists
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Versions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#findById
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Versions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#find
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Versions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#findOne
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Versions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#updateAll
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Versions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#deleteById
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Versions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#count
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Versions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Versions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#createChangeStream
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Versions/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#prototype$message
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Privately message the author of this contribution
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "prototype$message": {
          url: urlBase + "/Versions/:id/moderation/message",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#prototype$flag
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Flag this instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "prototype$flag": {
          url: urlBase + "/Versions/:id/moderation/flag",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#prototype$remove
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Request removal of this item
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "prototype$remove": {
          url: urlBase + "/Versions/:id/moderation/remove",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#prototype$report
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Report this contribution as needing moderation
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "prototype$report": {
          url: urlBase + "/Versions/:id/moderation/report/:status",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#prototype$vote
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Creates or replaces a Vote on the specified discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        "prototype$vote": {
          url: urlBase + "/Versions/:id/vote",
          method: "POST"
        },

        // INTERNAL. Use Node.original() instead.
        "::get::Node::original": {
          url: urlBase + "/Nodes/:id/original",
          method: "GET"
        },

        // INTERNAL. Use Node.original.create() instead.
        "::create::Node::original": {
          url: urlBase + "/Nodes/:id/original",
          method: "POST"
        },

        // INTERNAL. Use Node.original.update() instead.
        "::update::Node::original": {
          url: urlBase + "/Nodes/:id/original",
          method: "PUT"
        },

        // INTERNAL. Use Node.original.destroy() instead.
        "::destroy::Node::original": {
          url: urlBase + "/Nodes/:id/original",
          method: "DELETE"
        },

        // INTERNAL. Use Node.versions.findById() instead.
        "::findById::Node::versions": {
          url: urlBase + "/Nodes/:id/versions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.versions.destroyById() instead.
        "::destroyById::Node::versions": {
          url: urlBase + "/Nodes/:id/versions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.versions.updateById() instead.
        "::updateById::Node::versions": {
          url: urlBase + "/Nodes/:id/versions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.versions() instead.
        "::get::Node::versions": {
          isArray: true,
          url: urlBase + "/Nodes/:id/versions",
          method: "GET"
        },

        // INTERNAL. Use Node.versions.create() instead.
        "::create::Node::versions": {
          url: urlBase + "/Nodes/:id/versions",
          method: "POST"
        },

        // INTERNAL. Use Node.versions.destroyAll() instead.
        "::delete::Node::versions": {
          url: urlBase + "/Nodes/:id/versions",
          method: "DELETE"
        },

        // INTERNAL. Use Node.versions.count() instead.
        "::count::Node::versions": {
          url: urlBase + "/Nodes/:id/versions/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.version() instead.
        "::get::Comment::version": {
          url: urlBase + "/Comments/:id/version",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#updateOrCreate
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#update
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#destroyById
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#removeById
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Version#modelName
    * @propertyOf govrightCorpusServices.Version
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Version`.
    */
    R.modelName = "Version";


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#node
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Fetches belongsTo relation node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.node = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::get::Version::node"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Version.comments
     * @header lbServices.Version.comments
     * @object
     * @description
     *
     * The object `Version.comments` groups methods
     * manipulating `Comment` instances related to `Version`.
     *
     * Call {@link lbServices.Version#comments Version.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#comments
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Queries comments of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::Version::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.comments#count
         * @methodOf govrightCorpusServices.Version.comments
         *
         * @description
         *
         * Counts comments of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::Version::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.comments#create
         * @methodOf govrightCorpusServices.Version.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::Version::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.comments#destroyAll
         * @methodOf govrightCorpusServices.Version.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::Version::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.comments#destroyById
         * @methodOf govrightCorpusServices.Version.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::Version::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.comments#findById
         * @methodOf govrightCorpusServices.Version.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::Version::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.comments#updateById
         * @methodOf govrightCorpusServices.Version.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::Version::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#user
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Version::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Version.votes
     * @header lbServices.Version.votes
     * @object
     * @description
     *
     * The object `Version.votes` groups methods
     * manipulating `Vote` instances related to `Version`.
     *
     * Call {@link lbServices.Version#votes Version.votes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#votes
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Queries votes of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        R.votes = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::get::Version::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.votes#count
         * @methodOf govrightCorpusServices.Version.votes
         *
         * @description
         *
         * Counts votes of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.votes.count = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::count::Version::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.votes#destroyAll
         * @methodOf govrightCorpusServices.Version.votes
         *
         * @description
         *
         * Deletes all votes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.votes.destroyAll = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::delete::Version::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.votes#destroyById
         * @methodOf govrightCorpusServices.Version.votes
         *
         * @description
         *
         * Delete a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.votes.destroyById = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::destroyById::Version::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.votes#findById
         * @methodOf govrightCorpusServices.Version.votes
         *
         * @description
         *
         * Find a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        R.votes.findById = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::findById::Version::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.votes#updateById
         * @methodOf govrightCorpusServices.Version.votes
         *
         * @description
         *
         * Update a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        R.votes.updateById = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::updateById::Version::votes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Version.discussions
     * @header lbServices.Version.discussions
     * @object
     * @description
     *
     * The object `Version.discussions` groups methods
     * manipulating `Discussion` instances related to `Version`.
     *
     * Call {@link lbServices.Version#discussions Version.discussions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#discussions
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Queries discussions of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#count
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Counts discussions of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.discussions.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#create
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Creates a new instance in discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#destroyAll
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Deletes all discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#destroyById
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Delete a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#exists
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Check the existence of discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.exists = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::exists::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#findById
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Find a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#link
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Add a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.link = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::link::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#unlink
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Remove the discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.unlink = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::unlink::Version::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.discussions#updateById
         * @methodOf govrightCorpusServices.Version.discussions
         *
         * @description
         *
         * Update a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::Version::discussions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Version.stats
     * @header lbServices.Version.stats
     * @object
     * @description
     *
     * The object `Version.stats` groups methods
     * manipulating `Contribution` instances related to `Version`.
     *
     * Call {@link lbServices.Version#stats Version.stats()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#stats
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Queries stats of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Version::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.stats#count
         * @methodOf govrightCorpusServices.Version.stats
         *
         * @description
         *
         * Counts stats of Version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stats.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Version::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.stats#create
         * @methodOf govrightCorpusServices.Version.stats
         *
         * @description
         *
         * Creates a new instance in stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Version::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.stats#destroyAll
         * @methodOf govrightCorpusServices.Version.stats
         *
         * @description
         *
         * Deletes all stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Version::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.stats#destroyById
         * @methodOf govrightCorpusServices.Version.stats
         *
         * @description
         *
         * Delete a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Version::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.stats#findById
         * @methodOf govrightCorpusServices.Version.stats
         *
         * @description
         *
         * Find a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Version::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version.stats#updateById
         * @methodOf govrightCorpusServices.Version.stats
         *
         * @description
         *
         * Update a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Version::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Version#moderator
         * @methodOf govrightCorpusServices.Version
         *
         * @description
         *
         * Fetches belongsTo relation moderator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderator = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Version::moderator"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Comment
 * @header govrightCorpusServices.Comment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Comment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Comments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Comment.version() instead.
        "prototype$__get__version": {
          url: urlBase + "/Comments/:id/version",
          method: "GET"
        },

        // INTERNAL. Use Comment.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Comments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comment.votes.findById() instead.
        "prototype$__findById__votes": {
          url: urlBase + "/Comments/:id/votes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.votes.destroyById() instead.
        "prototype$__destroyById__votes": {
          url: urlBase + "/Comments/:id/votes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.votes.updateById() instead.
        "prototype$__updateById__votes": {
          url: urlBase + "/Comments/:id/votes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.discussions.findById() instead.
        "prototype$__findById__discussions": {
          url: urlBase + "/Comments/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.discussions.destroyById() instead.
        "prototype$__destroyById__discussions": {
          url: urlBase + "/Comments/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.discussions.updateById() instead.
        "prototype$__updateById__discussions": {
          url: urlBase + "/Comments/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.discussions.link() instead.
        "prototype$__link__discussions": {
          url: urlBase + "/Comments/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.discussions.unlink() instead.
        "prototype$__unlink__discussions": {
          url: urlBase + "/Comments/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.discussions.exists() instead.
        "prototype$__exists__discussions": {
          url: urlBase + "/Comments/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Comment.stats.findById() instead.
        "prototype$__findById__stats": {
          url: urlBase + "/Comments/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.stats.destroyById() instead.
        "prototype$__destroyById__stats": {
          url: urlBase + "/Comments/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.stats.updateById() instead.
        "prototype$__updateById__stats": {
          url: urlBase + "/Comments/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.moderator() instead.
        "prototype$__get__moderator": {
          url: urlBase + "/Comments/:id/moderator",
          method: "GET"
        },

        // INTERNAL. Use Comment.votes() instead.
        "prototype$__get__votes": {
          isArray: true,
          url: urlBase + "/Comments/:id/votes",
          method: "GET"
        },

        // INTERNAL. Use Comment.votes.destroyAll() instead.
        "prototype$__delete__votes": {
          url: urlBase + "/Comments/:id/votes",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.votes.count() instead.
        "prototype$__count__votes": {
          url: urlBase + "/Comments/:id/votes/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.discussions() instead.
        "prototype$__get__discussions": {
          isArray: true,
          url: urlBase + "/Comments/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Comment.discussions.create() instead.
        "prototype$__create__discussions": {
          url: urlBase + "/Comments/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Comment.discussions.destroyAll() instead.
        "prototype$__delete__discussions": {
          url: urlBase + "/Comments/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.discussions.count() instead.
        "prototype$__count__discussions": {
          url: urlBase + "/Comments/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.stats() instead.
        "prototype$__get__stats": {
          isArray: true,
          url: urlBase + "/Comments/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Comment.stats.create() instead.
        "prototype$__create__stats": {
          url: urlBase + "/Comments/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Comment.stats.destroyAll() instead.
        "prototype$__delete__stats": {
          url: urlBase + "/Comments/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.stats.count() instead.
        "prototype$__count__stats": {
          url: urlBase + "/Comments/:id/stats/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#create
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#upsert
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Comments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#exists
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Comments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#findById
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Comments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#find
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#findOne
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Comments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#updateAll
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Comments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#deleteById
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Comments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#count
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Comments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#createChangeStream
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Comments/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#prototype$respond
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Create an inline reply to this contribution
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `message` – `{string=}` - 
         *
         *  - `locale` – `{string=}` - 
         *
         *  - `dir` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$respond": {
          url: urlBase + "/Comments/:id/moderation/respond",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#prototype$message
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Privately message the author of this contribution
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$message": {
          url: urlBase + "/Comments/:id/moderation/message",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#prototype$flag
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Flag this instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$flag": {
          url: urlBase + "/Comments/:id/moderation/flag",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#prototype$remove
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Request removal of this item
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$remove": {
          url: urlBase + "/Comments/:id/moderation/remove",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#prototype$report
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Report this contribution as needing moderation
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$report": {
          url: urlBase + "/Comments/:id/moderation/report/:status",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#prototype$vote
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Creates or replaces a Vote on the specified discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$vote": {
          url: urlBase + "/Comments/:id/vote",
          method: "POST"
        },

        // INTERNAL. Use Version.comments.findById() instead.
        "::findById::Version::comments": {
          url: urlBase + "/Versions/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.comments.destroyById() instead.
        "::destroyById::Version::comments": {
          url: urlBase + "/Versions/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.comments.updateById() instead.
        "::updateById::Version::comments": {
          url: urlBase + "/Versions/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.comments() instead.
        "::get::Version::comments": {
          isArray: true,
          url: urlBase + "/Versions/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Version.comments.create() instead.
        "::create::Version::comments": {
          url: urlBase + "/Versions/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Version.comments.destroyAll() instead.
        "::delete::Version::comments": {
          url: urlBase + "/Versions/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Version.comments.count() instead.
        "::count::Version::comments": {
          url: urlBase + "/Versions/:id/comments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#updateOrCreate
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#update
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#destroyById
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#removeById
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Comment#modelName
    * @propertyOf govrightCorpusServices.Comment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Comment`.
    */
    R.modelName = "Comment";


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#version
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Version` object.)
         * </em>
         */
        R.version = function() {
          var TargetResource = $injector.get("Version");
          var action = TargetResource["::get::Comment::version"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#user
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Comment::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comment.votes
     * @header lbServices.Comment.votes
     * @object
     * @description
     *
     * The object `Comment.votes` groups methods
     * manipulating `Vote` instances related to `Comment`.
     *
     * Call {@link lbServices.Comment#votes Comment.votes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#votes
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Queries votes of Comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        R.votes = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::get::Comment::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.votes#count
         * @methodOf govrightCorpusServices.Comment.votes
         *
         * @description
         *
         * Counts votes of Comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.votes.count = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::count::Comment::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.votes#destroyAll
         * @methodOf govrightCorpusServices.Comment.votes
         *
         * @description
         *
         * Deletes all votes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.votes.destroyAll = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::delete::Comment::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.votes#destroyById
         * @methodOf govrightCorpusServices.Comment.votes
         *
         * @description
         *
         * Delete a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.votes.destroyById = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::destroyById::Comment::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.votes#findById
         * @methodOf govrightCorpusServices.Comment.votes
         *
         * @description
         *
         * Find a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        R.votes.findById = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::findById::Comment::votes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.votes#updateById
         * @methodOf govrightCorpusServices.Comment.votes
         *
         * @description
         *
         * Update a related item by id for votes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for votes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        R.votes.updateById = function() {
          var TargetResource = $injector.get("Vote");
          var action = TargetResource["::updateById::Comment::votes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comment.discussions
     * @header lbServices.Comment.discussions
     * @object
     * @description
     *
     * The object `Comment.discussions` groups methods
     * manipulating `Discussion` instances related to `Comment`.
     *
     * Call {@link lbServices.Comment#discussions Comment.discussions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#discussions
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Queries discussions of Comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#count
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Counts discussions of Comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.discussions.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#create
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Creates a new instance in discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#destroyAll
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Deletes all discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#destroyById
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Delete a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#exists
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Check the existence of discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.exists = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::exists::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#findById
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Find a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#link
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Add a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.link = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::link::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#unlink
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Remove the discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.unlink = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::unlink::Comment::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.discussions#updateById
         * @methodOf govrightCorpusServices.Comment.discussions
         *
         * @description
         *
         * Update a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::Comment::discussions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comment.stats
     * @header lbServices.Comment.stats
     * @object
     * @description
     *
     * The object `Comment.stats` groups methods
     * manipulating `Contribution` instances related to `Comment`.
     *
     * Call {@link lbServices.Comment#stats Comment.stats()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#stats
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Queries stats of Comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Comment::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.stats#count
         * @methodOf govrightCorpusServices.Comment.stats
         *
         * @description
         *
         * Counts stats of Comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stats.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Comment::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.stats#create
         * @methodOf govrightCorpusServices.Comment.stats
         *
         * @description
         *
         * Creates a new instance in stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Comment::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.stats#destroyAll
         * @methodOf govrightCorpusServices.Comment.stats
         *
         * @description
         *
         * Deletes all stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Comment::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.stats#destroyById
         * @methodOf govrightCorpusServices.Comment.stats
         *
         * @description
         *
         * Delete a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Comment::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.stats#findById
         * @methodOf govrightCorpusServices.Comment.stats
         *
         * @description
         *
         * Find a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Comment::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment.stats#updateById
         * @methodOf govrightCorpusServices.Comment.stats
         *
         * @description
         *
         * Update a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Comment::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comment#moderator
         * @methodOf govrightCorpusServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation moderator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderator = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Comment::moderator"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Vote
 * @header govrightCorpusServices.Vote
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Vote` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Vote",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Votes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Vote.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Votes/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#prototype$__get__target
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Fetches belongsTo relation target.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        "prototype$__get__target": {
          url: urlBase + "/Votes/:id/target",
          method: "GET"
        },

        // INTERNAL. Use Vote.discussions.findById() instead.
        "prototype$__findById__discussions": {
          url: urlBase + "/Votes/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vote.discussions.destroyById() instead.
        "prototype$__destroyById__discussions": {
          url: urlBase + "/Votes/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.discussions.updateById() instead.
        "prototype$__updateById__discussions": {
          url: urlBase + "/Votes/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vote.discussions.link() instead.
        "prototype$__link__discussions": {
          url: urlBase + "/Votes/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vote.discussions.unlink() instead.
        "prototype$__unlink__discussions": {
          url: urlBase + "/Votes/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.discussions.exists() instead.
        "prototype$__exists__discussions": {
          url: urlBase + "/Votes/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Vote.stats.findById() instead.
        "prototype$__findById__stats": {
          url: urlBase + "/Votes/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vote.stats.destroyById() instead.
        "prototype$__destroyById__stats": {
          url: urlBase + "/Votes/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.stats.updateById() instead.
        "prototype$__updateById__stats": {
          url: urlBase + "/Votes/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vote.discussions() instead.
        "prototype$__get__discussions": {
          isArray: true,
          url: urlBase + "/Votes/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Vote.discussions.create() instead.
        "prototype$__create__discussions": {
          url: urlBase + "/Votes/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Vote.discussions.destroyAll() instead.
        "prototype$__delete__discussions": {
          url: urlBase + "/Votes/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.discussions.count() instead.
        "prototype$__count__discussions": {
          url: urlBase + "/Votes/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Vote.stats() instead.
        "prototype$__get__stats": {
          isArray: true,
          url: urlBase + "/Votes/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Vote.stats.create() instead.
        "prototype$__create__stats": {
          url: urlBase + "/Votes/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Vote.stats.destroyAll() instead.
        "prototype$__delete__stats": {
          url: urlBase + "/Votes/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.stats.count() instead.
        "prototype$__count__stats": {
          url: urlBase + "/Votes/:id/stats/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#create
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Votes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#upsert
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Votes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#exists
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Votes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#findById
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Votes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#find
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Votes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#findOne
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Votes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#updateAll
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Votes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#deleteById
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Votes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#count
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Votes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Votes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#createChangeStream
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Votes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Version.votes.findById() instead.
        "::findById::Version::votes": {
          url: urlBase + "/Versions/:id/votes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.votes.destroyById() instead.
        "::destroyById::Version::votes": {
          url: urlBase + "/Versions/:id/votes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.votes.updateById() instead.
        "::updateById::Version::votes": {
          url: urlBase + "/Versions/:id/votes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.votes() instead.
        "::get::Version::votes": {
          isArray: true,
          url: urlBase + "/Versions/:id/votes",
          method: "GET"
        },

        // INTERNAL. Use Version.votes.destroyAll() instead.
        "::delete::Version::votes": {
          url: urlBase + "/Versions/:id/votes",
          method: "DELETE"
        },

        // INTERNAL. Use Version.votes.count() instead.
        "::count::Version::votes": {
          url: urlBase + "/Versions/:id/votes/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.votes.findById() instead.
        "::findById::Comment::votes": {
          url: urlBase + "/Comments/:id/votes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.votes.destroyById() instead.
        "::destroyById::Comment::votes": {
          url: urlBase + "/Comments/:id/votes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.votes.updateById() instead.
        "::updateById::Comment::votes": {
          url: urlBase + "/Comments/:id/votes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.votes() instead.
        "::get::Comment::votes": {
          isArray: true,
          url: urlBase + "/Comments/:id/votes",
          method: "GET"
        },

        // INTERNAL. Use Comment.votes.destroyAll() instead.
        "::delete::Comment::votes": {
          url: urlBase + "/Comments/:id/votes",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.votes.count() instead.
        "::count::Comment::votes": {
          url: urlBase + "/Comments/:id/votes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#updateOrCreate
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vote` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#update
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#destroyById
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#removeById
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Vote#modelName
    * @propertyOf govrightCorpusServices.Vote
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Vote`.
    */
    R.modelName = "Vote";


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#user
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Vote::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Vote.discussions
     * @header lbServices.Vote.discussions
     * @object
     * @description
     *
     * The object `Vote.discussions` groups methods
     * manipulating `Discussion` instances related to `Vote`.
     *
     * Call {@link lbServices.Vote#discussions Vote.discussions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#discussions
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Queries discussions of Vote.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#count
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Counts discussions of Vote.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.discussions.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#create
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Creates a new instance in discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#destroyAll
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Deletes all discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#destroyById
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Delete a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#exists
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Check the existence of discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.exists = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::exists::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#findById
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Find a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#link
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Add a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.link = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::link::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#unlink
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Remove the discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.unlink = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::unlink::Vote::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.discussions#updateById
         * @methodOf govrightCorpusServices.Vote.discussions
         *
         * @description
         *
         * Update a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::Vote::discussions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Vote.stats
     * @header lbServices.Vote.stats
     * @object
     * @description
     *
     * The object `Vote.stats` groups methods
     * manipulating `Contribution` instances related to `Vote`.
     *
     * Call {@link lbServices.Vote#stats Vote.stats()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote#stats
         * @methodOf govrightCorpusServices.Vote
         *
         * @description
         *
         * Queries stats of Vote.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Vote::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.stats#count
         * @methodOf govrightCorpusServices.Vote.stats
         *
         * @description
         *
         * Counts stats of Vote.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stats.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Vote::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.stats#create
         * @methodOf govrightCorpusServices.Vote.stats
         *
         * @description
         *
         * Creates a new instance in stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Vote::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.stats#destroyAll
         * @methodOf govrightCorpusServices.Vote.stats
         *
         * @description
         *
         * Deletes all stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Vote::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.stats#destroyById
         * @methodOf govrightCorpusServices.Vote.stats
         *
         * @description
         *
         * Delete a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Vote::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.stats#findById
         * @methodOf govrightCorpusServices.Vote.stats
         *
         * @description
         *
         * Find a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Vote::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Vote.stats#updateById
         * @methodOf govrightCorpusServices.Vote.stats
         *
         * @description
         *
         * Update a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Vote::stats"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Comparison
 * @header govrightCorpusServices.Comparison
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comparison` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Comparison",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Comparisons/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Comparison.node() instead.
        "prototype$__get__node": {
          url: urlBase + "/Comparisons/:id/node",
          method: "GET"
        },

        // INTERNAL. Use Comparison.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/Comparisons/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comparison.discussions.findById() instead.
        "prototype$__findById__discussions": {
          url: urlBase + "/Comparisons/:id/discussions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comparison.discussions.destroyById() instead.
        "prototype$__destroyById__discussions": {
          url: urlBase + "/Comparisons/:id/discussions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.discussions.updateById() instead.
        "prototype$__updateById__discussions": {
          url: urlBase + "/Comparisons/:id/discussions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comparison.discussions.link() instead.
        "prototype$__link__discussions": {
          url: urlBase + "/Comparisons/:id/discussions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comparison.discussions.unlink() instead.
        "prototype$__unlink__discussions": {
          url: urlBase + "/Comparisons/:id/discussions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.discussions.exists() instead.
        "prototype$__exists__discussions": {
          url: urlBase + "/Comparisons/:id/discussions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Comparison.stats.findById() instead.
        "prototype$__findById__stats": {
          url: urlBase + "/Comparisons/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comparison.stats.destroyById() instead.
        "prototype$__destroyById__stats": {
          url: urlBase + "/Comparisons/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.stats.updateById() instead.
        "prototype$__updateById__stats": {
          url: urlBase + "/Comparisons/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comparison.moderator() instead.
        "prototype$__get__moderator": {
          url: urlBase + "/Comparisons/:id/moderator",
          method: "GET"
        },

        // INTERNAL. Use Comparison.discussions() instead.
        "prototype$__get__discussions": {
          isArray: true,
          url: urlBase + "/Comparisons/:id/discussions",
          method: "GET"
        },

        // INTERNAL. Use Comparison.discussions.create() instead.
        "prototype$__create__discussions": {
          url: urlBase + "/Comparisons/:id/discussions",
          method: "POST"
        },

        // INTERNAL. Use Comparison.discussions.destroyAll() instead.
        "prototype$__delete__discussions": {
          url: urlBase + "/Comparisons/:id/discussions",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.discussions.count() instead.
        "prototype$__count__discussions": {
          url: urlBase + "/Comparisons/:id/discussions/count",
          method: "GET"
        },

        // INTERNAL. Use Comparison.stats() instead.
        "prototype$__get__stats": {
          isArray: true,
          url: urlBase + "/Comparisons/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Comparison.stats.create() instead.
        "prototype$__create__stats": {
          url: urlBase + "/Comparisons/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Comparison.stats.destroyAll() instead.
        "prototype$__delete__stats": {
          url: urlBase + "/Comparisons/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.stats.count() instead.
        "prototype$__count__stats": {
          url: urlBase + "/Comparisons/:id/stats/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#create
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Comparisons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#upsert
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Comparisons",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#exists
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Comparisons/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#findById
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Comparisons/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#find
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Comparisons",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#findOne
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Comparisons/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#updateAll
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Comparisons/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#deleteById
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Comparisons/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#count
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Comparisons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Comparisons/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#createChangeStream
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Comparisons/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#prototype$message
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Privately message the author of this contribution
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "prototype$message": {
          url: urlBase + "/Comparisons/:id/moderation/message",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#prototype$flag
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Flag this instance
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "prototype$flag": {
          url: urlBase + "/Comparisons/:id/moderation/flag",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#prototype$remove
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Request removal of this item
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "prototype$remove": {
          url: urlBase + "/Comparisons/:id/moderation/remove",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#prototype$report
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Report this contribution as needing moderation
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         *  - `status` – `{string}` - 
         *
         *  - `message` – `{string=}` - 
         *
         *  - `discussionId` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        "prototype$report": {
          url: urlBase + "/Comparisons/:id/moderation/report/:status",
          method: "POST"
        },

        // INTERNAL. Use Node.comparisons.findById() instead.
        "::findById::Node::comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.comparisons.destroyById() instead.
        "::destroyById::Node::comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.comparisons.updateById() instead.
        "::updateById::Node::comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.comparisons() instead.
        "::get::Node::comparisons": {
          isArray: true,
          url: urlBase + "/Nodes/:id/comparisons",
          method: "GET"
        },

        // INTERNAL. Use Node.comparisons.create() instead.
        "::create::Node::comparisons": {
          url: urlBase + "/Nodes/:id/comparisons",
          method: "POST"
        },

        // INTERNAL. Use Node.comparisons.destroyAll() instead.
        "::delete::Node::comparisons": {
          url: urlBase + "/Nodes/:id/comparisons",
          method: "DELETE"
        },

        // INTERNAL. Use Node.comparisons.count() instead.
        "::count::Node::comparisons": {
          url: urlBase + "/Nodes/:id/comparisons/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#updateOrCreate
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comparison` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#update
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#destroyById
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#removeById
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Comparison#modelName
    * @propertyOf govrightCorpusServices.Comparison
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Comparison`.
    */
    R.modelName = "Comparison";


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#node
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Fetches belongsTo relation node.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Node` object.)
         * </em>
         */
        R.node = function() {
          var TargetResource = $injector.get("Node");
          var action = TargetResource["::get::Comparison::node"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#user
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Comparison::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comparison.discussions
     * @header lbServices.Comparison.discussions
     * @object
     * @description
     *
     * The object `Comparison.discussions` groups methods
     * manipulating `Discussion` instances related to `Comparison`.
     *
     * Call {@link lbServices.Comparison#discussions Comparison.discussions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#discussions
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Queries discussions of Comparison.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#count
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Counts discussions of Comparison.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.discussions.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#create
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Creates a new instance in discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#destroyAll
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Deletes all discussions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#destroyById
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Delete a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#exists
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Check the existence of discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.exists = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::exists::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#findById
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Find a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#link
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Add a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.link = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::link::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#unlink
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Remove the discussions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.discussions.unlink = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::unlink::Comparison::discussions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.discussions#updateById
         * @methodOf govrightCorpusServices.Comparison.discussions
         *
         * @description
         *
         * Update a related item by id for discussions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for discussions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussions.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::Comparison::discussions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comparison.stats
     * @header lbServices.Comparison.stats
     * @object
     * @description
     *
     * The object `Comparison.stats` groups methods
     * manipulating `Contribution` instances related to `Comparison`.
     *
     * Call {@link lbServices.Comparison#stats Comparison.stats()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#stats
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Queries stats of Comparison.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::get::Comparison::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.stats#count
         * @methodOf govrightCorpusServices.Comparison.stats
         *
         * @description
         *
         * Counts stats of Comparison.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stats.count = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::count::Comparison::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.stats#create
         * @methodOf govrightCorpusServices.Comparison.stats
         *
         * @description
         *
         * Creates a new instance in stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.create = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::create::Comparison::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.stats#destroyAll
         * @methodOf govrightCorpusServices.Comparison.stats
         *
         * @description
         *
         * Deletes all stats of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyAll = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::delete::Comparison::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.stats#destroyById
         * @methodOf govrightCorpusServices.Comparison.stats
         *
         * @description
         *
         * Delete a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stats.destroyById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::destroyById::Comparison::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.stats#findById
         * @methodOf govrightCorpusServices.Comparison.stats
         *
         * @description
         *
         * Find a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.findById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::findById::Comparison::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison.stats#updateById
         * @methodOf govrightCorpusServices.Comparison.stats
         *
         * @description
         *
         * Update a related item by id for stats.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stats
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R.stats.updateById = function() {
          var TargetResource = $injector.get("Contribution");
          var action = TargetResource["::updateById::Comparison::stats"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Comparison#moderator
         * @methodOf govrightCorpusServices.Comparison
         *
         * @description
         *
         * Fetches belongsTo relation moderator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.moderator = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Comparison::moderator"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.Contribution
 * @header govrightCorpusServices.Contribution
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Contribution` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Contribution",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Contributions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#prototype$__get__contribution
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Fetches belongsTo relation contribution.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "prototype$__get__contribution": {
          url: urlBase + "/Contributions/:id/contribution",
          method: "GET"
        },

        // INTERNAL. Use Contribution.discussion() instead.
        "prototype$__get__discussion": {
          url: urlBase + "/Contributions/:id/discussion",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#create
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Contributions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#upsert
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Contributions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#exists
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Contributions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#findById
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Contributions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#find
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Contributions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#findOne
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Contributions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#updateAll
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Contributions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#deleteById
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Contributions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#count
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Contributions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#prototype$updateAttributes
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Contributions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#createChangeStream
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Contributions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Discussion.votes.findById() instead.
        "::findById::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.votes.destroyById() instead.
        "::destroyById::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.votes.updateById() instead.
        "::updateById::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.votes.link() instead.
        "::link::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.votes.unlink() instead.
        "::unlink::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.votes.exists() instead.
        "::exists::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.stats.findById() instead.
        "::findById::Discussion::stats": {
          url: urlBase + "/Discussions/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.stats.destroyById() instead.
        "::destroyById::Discussion::stats": {
          url: urlBase + "/Discussions/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.stats.updateById() instead.
        "::updateById::Discussion::stats": {
          url: urlBase + "/Discussions/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.nodes.findById() instead.
        "::findById::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.nodes.destroyById() instead.
        "::destroyById::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.nodes.updateById() instead.
        "::updateById::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.nodes.link() instead.
        "::link::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.nodes.unlink() instead.
        "::unlink::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.nodes.exists() instead.
        "::exists::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.versions.findById() instead.
        "::findById::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.versions.destroyById() instead.
        "::destroyById::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.versions.updateById() instead.
        "::updateById::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.versions.link() instead.
        "::link::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.versions.unlink() instead.
        "::unlink::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.versions.exists() instead.
        "::exists::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.comparisons.findById() instead.
        "::findById::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comparisons.destroyById() instead.
        "::destroyById::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comparisons.updateById() instead.
        "::updateById::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comparisons.link() instead.
        "::link::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comparisons.unlink() instead.
        "::unlink::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comparisons.exists() instead.
        "::exists::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.comments.findById() instead.
        "::findById::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comments.destroyById() instead.
        "::destroyById::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comments.updateById() instead.
        "::updateById::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comments.link() instead.
        "::link::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.comments.unlink() instead.
        "::unlink::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comments.exists() instead.
        "::exists::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.votes() instead.
        "::get::Discussion::votes": {
          isArray: true,
          url: urlBase + "/Discussions/:id/votes",
          method: "GET"
        },

        // INTERNAL. Use Discussion.votes.create() instead.
        "::create::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes",
          method: "POST"
        },

        // INTERNAL. Use Discussion.votes.destroyAll() instead.
        "::delete::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.votes.count() instead.
        "::count::Discussion::votes": {
          url: urlBase + "/Discussions/:id/votes/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.stats() instead.
        "::get::Discussion::stats": {
          isArray: true,
          url: urlBase + "/Discussions/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Discussion.stats.create() instead.
        "::create::Discussion::stats": {
          url: urlBase + "/Discussions/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Discussion.stats.destroyAll() instead.
        "::delete::Discussion::stats": {
          url: urlBase + "/Discussions/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.stats.count() instead.
        "::count::Discussion::stats": {
          url: urlBase + "/Discussions/:id/stats/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.nodes() instead.
        "::get::Discussion::nodes": {
          isArray: true,
          url: urlBase + "/Discussions/:id/nodes",
          method: "GET"
        },

        // INTERNAL. Use Discussion.nodes.create() instead.
        "::create::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes",
          method: "POST"
        },

        // INTERNAL. Use Discussion.nodes.destroyAll() instead.
        "::delete::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.nodes.count() instead.
        "::count::Discussion::nodes": {
          url: urlBase + "/Discussions/:id/nodes/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.versions() instead.
        "::get::Discussion::versions": {
          isArray: true,
          url: urlBase + "/Discussions/:id/versions",
          method: "GET"
        },

        // INTERNAL. Use Discussion.versions.create() instead.
        "::create::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions",
          method: "POST"
        },

        // INTERNAL. Use Discussion.versions.destroyAll() instead.
        "::delete::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.versions.count() instead.
        "::count::Discussion::versions": {
          url: urlBase + "/Discussions/:id/versions/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comparisons() instead.
        "::get::Discussion::comparisons": {
          isArray: true,
          url: urlBase + "/Discussions/:id/comparisons",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comparisons.create() instead.
        "::create::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons",
          method: "POST"
        },

        // INTERNAL. Use Discussion.comparisons.destroyAll() instead.
        "::delete::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comparisons.count() instead.
        "::count::Discussion::comparisons": {
          url: urlBase + "/Discussions/:id/comparisons/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comments() instead.
        "::get::Discussion::comments": {
          isArray: true,
          url: urlBase + "/Discussions/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Discussion.comments.create() instead.
        "::create::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Discussion.comments.destroyAll() instead.
        "::delete::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.comments.count() instead.
        "::count::Discussion::comments": {
          url: urlBase + "/Discussions/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Node.stats.findById() instead.
        "::findById::Node::stats": {
          url: urlBase + "/Nodes/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Node.stats.destroyById() instead.
        "::destroyById::Node::stats": {
          url: urlBase + "/Nodes/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Node.stats.updateById() instead.
        "::updateById::Node::stats": {
          url: urlBase + "/Nodes/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Node.stats() instead.
        "::get::Node::stats": {
          isArray: true,
          url: urlBase + "/Nodes/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Node.stats.create() instead.
        "::create::Node::stats": {
          url: urlBase + "/Nodes/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Node.stats.destroyAll() instead.
        "::delete::Node::stats": {
          url: urlBase + "/Nodes/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Node.stats.count() instead.
        "::count::Node::stats": {
          url: urlBase + "/Nodes/:id/stats/count",
          method: "GET"
        },

        // INTERNAL. Use Version.stats.findById() instead.
        "::findById::Version::stats": {
          url: urlBase + "/Versions/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Version.stats.destroyById() instead.
        "::destroyById::Version::stats": {
          url: urlBase + "/Versions/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Version.stats.updateById() instead.
        "::updateById::Version::stats": {
          url: urlBase + "/Versions/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Version.stats() instead.
        "::get::Version::stats": {
          isArray: true,
          url: urlBase + "/Versions/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Version.stats.create() instead.
        "::create::Version::stats": {
          url: urlBase + "/Versions/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Version.stats.destroyAll() instead.
        "::delete::Version::stats": {
          url: urlBase + "/Versions/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Version.stats.count() instead.
        "::count::Version::stats": {
          url: urlBase + "/Versions/:id/stats/count",
          method: "GET"
        },

        // INTERNAL. Use Comment.stats.findById() instead.
        "::findById::Comment::stats": {
          url: urlBase + "/Comments/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comment.stats.destroyById() instead.
        "::destroyById::Comment::stats": {
          url: urlBase + "/Comments/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.stats.updateById() instead.
        "::updateById::Comment::stats": {
          url: urlBase + "/Comments/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comment.stats() instead.
        "::get::Comment::stats": {
          isArray: true,
          url: urlBase + "/Comments/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Comment.stats.create() instead.
        "::create::Comment::stats": {
          url: urlBase + "/Comments/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Comment.stats.destroyAll() instead.
        "::delete::Comment::stats": {
          url: urlBase + "/Comments/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Comment.stats.count() instead.
        "::count::Comment::stats": {
          url: urlBase + "/Comments/:id/stats/count",
          method: "GET"
        },

        // INTERNAL. Use Vote.stats.findById() instead.
        "::findById::Vote::stats": {
          url: urlBase + "/Votes/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vote.stats.destroyById() instead.
        "::destroyById::Vote::stats": {
          url: urlBase + "/Votes/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.stats.updateById() instead.
        "::updateById::Vote::stats": {
          url: urlBase + "/Votes/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vote.stats() instead.
        "::get::Vote::stats": {
          isArray: true,
          url: urlBase + "/Votes/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Vote.stats.create() instead.
        "::create::Vote::stats": {
          url: urlBase + "/Votes/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Vote.stats.destroyAll() instead.
        "::delete::Vote::stats": {
          url: urlBase + "/Votes/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Vote.stats.count() instead.
        "::count::Vote::stats": {
          url: urlBase + "/Votes/:id/stats/count",
          method: "GET"
        },

        // INTERNAL. Use Comparison.stats.findById() instead.
        "::findById::Comparison::stats": {
          url: urlBase + "/Comparisons/:id/stats/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comparison.stats.destroyById() instead.
        "::destroyById::Comparison::stats": {
          url: urlBase + "/Comparisons/:id/stats/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.stats.updateById() instead.
        "::updateById::Comparison::stats": {
          url: urlBase + "/Comparisons/:id/stats/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comparison.stats() instead.
        "::get::Comparison::stats": {
          isArray: true,
          url: urlBase + "/Comparisons/:id/stats",
          method: "GET"
        },

        // INTERNAL. Use Comparison.stats.create() instead.
        "::create::Comparison::stats": {
          url: urlBase + "/Comparisons/:id/stats",
          method: "POST"
        },

        // INTERNAL. Use Comparison.stats.destroyAll() instead.
        "::delete::Comparison::stats": {
          url: urlBase + "/Comparisons/:id/stats",
          method: "DELETE"
        },

        // INTERNAL. Use Comparison.stats.count() instead.
        "::count::Comparison::stats": {
          url: urlBase + "/Comparisons/:id/stats/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#updateOrCreate
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#update
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#destroyById
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#removeById
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name govrightCorpusServices.Contribution#modelName
    * @propertyOf govrightCorpusServices.Contribution
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Contribution`.
    */
    R.modelName = "Contribution";


        /**
         * @ngdoc method
         * @name govrightCorpusServices.Contribution#discussion
         * @methodOf govrightCorpusServices.Contribution
         *
         * @description
         *
         * Fetches belongsTo relation discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussion = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::Contribution::discussion"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name govrightCorpusServices.User
 * @header govrightCorpusServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$__findById__accessTokens
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$__destroyById__accessTokens
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$__updateById__accessTokens
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.moderating.findById() instead.
        "prototype$__findById__moderating": {
          url: urlBase + "/Users/:id/moderating/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.moderating.destroyById() instead.
        "prototype$__destroyById__moderating": {
          url: urlBase + "/Users/:id/moderating/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.moderating.updateById() instead.
        "prototype$__updateById__moderating": {
          url: urlBase + "/Users/:id/moderating/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.moderating.link() instead.
        "prototype$__link__moderating": {
          url: urlBase + "/Users/:id/moderating/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.moderating.unlink() instead.
        "prototype$__unlink__moderating": {
          url: urlBase + "/Users/:id/moderating/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.moderating.exists() instead.
        "prototype$__exists__moderating": {
          url: urlBase + "/Users/:id/moderating/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$__get__accessTokens
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Queries accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$__create__accessTokens
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$__delete__accessTokens
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$__count__accessTokens
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Counts accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use User.moderating() instead.
        "prototype$__get__moderating": {
          isArray: true,
          url: urlBase + "/Users/:id/moderating",
          method: "GET"
        },

        // INTERNAL. Use User.moderating.create() instead.
        "prototype$__create__moderating": {
          url: urlBase + "/Users/:id/moderating",
          method: "POST"
        },

        // INTERNAL. Use User.moderating.destroyAll() instead.
        "prototype$__delete__moderating": {
          url: urlBase + "/Users/:id/moderating",
          method: "DELETE"
        },

        // INTERNAL. Use User.moderating.count() instead.
        "prototype$__count__moderating": {
          url: urlBase + "/Users/:id/moderating/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#upsert
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#findById
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#findOne
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#updateAll
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#prototype$updateAttributes
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#createChangeStream
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#login
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#logout
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        // INTERNAL. Use Law.user() instead.
        "::get::Law::user": {
          url: urlBase + "/Laws/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Discussion.user() instead.
        "::get::Discussion::user": {
          url: urlBase + "/Discussions/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Discussion.moderators.findById() instead.
        "::findById::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.moderators.destroyById() instead.
        "::destroyById::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.moderators.updateById() instead.
        "::updateById::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.moderators.link() instead.
        "::link::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.moderators.unlink() instead.
        "::unlink::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.moderators.exists() instead.
        "::exists::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Discussion.moderators() instead.
        "::get::Discussion::moderators": {
          isArray: true,
          url: urlBase + "/Discussions/:id/moderators",
          method: "GET"
        },

        // INTERNAL. Use Discussion.moderators.create() instead.
        "::create::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators",
          method: "POST"
        },

        // INTERNAL. Use Discussion.moderators.destroyAll() instead.
        "::delete::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.moderators.count() instead.
        "::count::Discussion::moderators": {
          url: urlBase + "/Discussions/:id/moderators/count",
          method: "GET"
        },

        // INTERNAL. Use Node.user() instead.
        "::get::Node::user": {
          url: urlBase + "/Nodes/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Version.user() instead.
        "::get::Version::user": {
          url: urlBase + "/Versions/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Version.moderator() instead.
        "::get::Version::moderator": {
          url: urlBase + "/Versions/:id/moderator",
          method: "GET"
        },

        // INTERNAL. Use Comment.user() instead.
        "::get::Comment::user": {
          url: urlBase + "/Comments/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comment.moderator() instead.
        "::get::Comment::moderator": {
          url: urlBase + "/Comments/:id/moderator",
          method: "GET"
        },

        // INTERNAL. Use Vote.user() instead.
        "::get::Vote::user": {
          url: urlBase + "/Votes/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comparison.user() instead.
        "::get::Comparison::user": {
          url: urlBase + "/Comparisons/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Comparison.moderator() instead.
        "::get::Comparison::moderator": {
          url: urlBase + "/Comparisons/:id/moderator",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#getCurrent
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#updateOrCreate
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#update
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#getCachedCurrent
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link govrightCorpusServices.User#login} or
         * {@link govrightCorpusServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#isAuthenticated
         * @methodOf govrightCorpusServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#getCurrentId
         * @methodOf govrightCorpusServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name govrightCorpusServices.User#modelName
    * @propertyOf govrightCorpusServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.moderating
     * @header lbServices.User.moderating
     * @object
     * @description
     *
     * The object `User.moderating` groups methods
     * manipulating `Discussion` instances related to `User`.
     *
     * Call {@link lbServices.User#moderating User.moderating()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name govrightCorpusServices.User#moderating
         * @methodOf govrightCorpusServices.User
         *
         * @description
         *
         * Queries moderating of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.moderating = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#count
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Counts moderating of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.moderating.count = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::count::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#create
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Creates a new instance in moderating of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.moderating.create = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::create::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#destroyAll
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Deletes all moderating of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.moderating.destroyAll = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::delete::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#destroyById
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Delete a related item by id for moderating.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for moderating
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.moderating.destroyById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::destroyById::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#exists
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Check the existence of moderating relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for moderating
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.moderating.exists = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::exists::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#findById
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Find a related item by id for moderating.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for moderating
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.moderating.findById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::findById::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#link
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Add a related item by id for moderating.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for moderating
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.moderating.link = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::link::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#unlink
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Remove the moderating relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for moderating
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.moderating.unlink = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::unlink::user::moderating"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name govrightCorpusServices.User.moderating#updateById
         * @methodOf govrightCorpusServices.User.moderating
         *
         * @description
         *
         * Update a related item by id for moderating.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for moderating
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.moderating.updateById = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::updateById::user::moderating"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name govrightCorpusServices.LoopBackResourceProvider
   * @header govrightCorpusServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name govrightCorpusServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf govrightCorpusServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name govrightCorpusServices.LoopBackResourceProvider#setUrlBase
     * @methodOf govrightCorpusServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
