(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root['TmplInline_common'] = factory();
  }
} (this,
function() {
  return {
    'page': function(it, opt) {
      it = it || {};
      opt = opt || {};
      with(it) {
        var _$out_ = [];

        if (total > 1) {

          var idx = idx || 1;
          var isFirst = (idx == 1) ? true: false;
          var isLast = (idx == total) ? true: false;
          var from = parseInt(idx - max / 2);
          var to = parseInt(idx + max / 2);
          if (from == 2 || to == total - 2) {
            max = max + 2;
          }

          if (total - 2 <= max) {
            _$out_.push('<div class="page-box"><a href="javascript:void(0);" class="page-pre-btn ');
            if (isFirst) {
              _$out_.push('page-btn-dis');
            }
            _$out_.push('"><i class="page-btn-dis"></i></a>');
            for (var i = 1,
            len = total; i <= len; i++) {
              _$out_.push('<a href="javascript:void(0);" data-index="', i, '" class="page-btn');
              if (i == 1) {
                _$out_.push(' page-first');
              }

              if (i == len) {
                _$out_.push(' page-last');
              }

              if (i == idx) {
                _$out_.push(' page-btn-cur');
              }
              _$out_.push('">', i, '</a>');
            }
            _$out_.push('<a href="javascript:void(0);" class="page-next-btn ');
            if (isLast) {
              _$out_.push('page-btn-dis');
            }
            _$out_.push('"><i></i></a></div>');
          } else {

            if ((from > 2) && (to < total - 2)) {
              _$out_.push('<div class="page-box"><a href="javascript:void(0);" class="page-pre-btn"><i></i></a><a href="javascript:void(0);" data-index="1" class="page-btn page-first">1</a><a href="javascript:void(0);" data-index="2" class="page-btn">2</a><span>…</span>');
              for (var i = from,
              len = total; i < to; i++) {
                _$out_.push('<a href="javascript:void(0);" data-index="', i + 1, '" class="page-btn');
                if (i + 1 == idx) {
                  _$out_.push(' page-btn-cur');
                }
                _$out_.push('">', i + 1, '</a>');
              }
              _$out_.push('<span>…</span><a href="javascript:void(0);" data-index="', len - 1, '" class="page-btn">', len - 1, '</a><a href="javascript:void(0);" data-index="', len, '" class="page-btn page-last">', len, '</a><a href="javascript:void(0);" class="page-next-btn"><i></i></a></div>');
            } else {

              if (from <= 2) {
                _$out_.push('<a href="javascript:void(0);" class="page-pre-btn ');
                if (isFirst) {
                  _$out_.push('page-btn-dis');
                }
                _$out_.push('"><i class="page-btn-dis"></i></a>');
                for (var i = 1,
                len = total; i <= Math.max(max, to); i++) {
                  _$out_.push('<a href="javascript:void(0);" data-index="', i, '" class="page-btn');
                  if (i == 1) {
                    _$out_.push(' page-first');
                  }

                  if (i == len) {
                    _$out_.push(' page-last');
                  }

                  if (i == idx) {
                    _$out_.push(' page-btn-cur');
                  }
                  _$out_.push('">', i, '</a>');
                }
                _$out_.push('<span>…</span><a href="javascript:void(0);" data-index="', len - 1, '" class="page-btn">', len - 1, '</a><a href="javascript:void(0);" data-index="', len, '" class="page-btn page-last">', len, '</a><a href="javascript:void(0);" class="page-next-btn"><i></i></a>');
              }

              if (to >= total - 2) {
                _$out_.push('<a href="javascript:void(0);" class="page-pre-btn"><i></i></a><a href="javascript:void(0);" data-index="1" class="page-btn page-first">1</a><a href="javascript:void(0);" data-index="2" class="page-btn">2</a><span>…</span>');
                for (var i = Math.min(from, total - max), len = total; i < total; i++) {
                  _$out_.push('<a href="javascript:void(0);" data-index="', i + 1, '" class="page-btn');
                  if (i == idx - 1) {
                    _$out_.push(' page-btn-cur');
                  }

                  if (i == total - 1) {
                    _$out_.push(' page-last');
                  }
                  _$out_.push('">', i + 1, '</a>');
                }
                _$out_.push('<a href="javascript:void(0);" class="page-next-btn ');
                if (isLast) {
                  _$out_.push('page-btn-dis');
                }
                _$out_.push('"><i></i></a>');
              }

            }

          }

        }

        return _$out_.join('');
      }
    }
  };
}));