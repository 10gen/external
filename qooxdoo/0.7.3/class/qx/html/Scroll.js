/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)

************************************************************************ */

/* ************************************************************************

#module(ui_core)

************************************************************************ */

qx.Class.define("qx.html.Scroll",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /**
     * TODOC
     *
     * @type static
     * @param el {Element} TODOC
     * @return {var} TODOC
     */
    getLeftSum : function(el)
    {
      var sum = 0;
      var p = el.parentNode;

      while (p.nodeType == 1)
      {
        sum += p.scrollLeft;
        p = p.parentNode;
      }

      return sum;
    },


    /**
     * TODOC
     *
     * @type static
     * @param el {Element} TODOC
     * @return {var} TODOC
     */
    getTopSum : function(el)
    {
      var sum = 0;
      var p = el.parentNode;

      while (p.nodeType == 1)
      {
        sum += p.scrollTop;
        p = p.parentNode;
      }

      return sum;
    }
  }
});
