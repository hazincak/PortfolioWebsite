<template>
    <div>
        <div class="modal fade" id="gmitModules" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{{$t('gmit.completed-modules')}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                          <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">{{$t('gmit.module-name')}}</th>
                              <th class="text-center" scope="col">{{$t('gmit.final-grade-percentage')}}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{{$t('gmit.oop-subject')}}</td>
                              <td class="text-center">90%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.aoop-subject')}}</td>
                              <td class="text-center">75%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.catc-subject')}}</td>
                              <td class="text-center">82%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.nt-subject')}}</td>
                              <td class="text-center">82%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.ddad-subject')}}</td>
                              <td class="text-center">78%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.wad-subject')}}</td>
                              <td class="text-center">81%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.aad-subject')}}</td>
                              <td class="text-center">75%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.amd-subject')}}</td>
                              <td class="text-center">93%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.osacc-subject')}}</td>
                              <td class="text-center">78%</td>
                            </tr>
                            <tr>
                              <td>{{$t('gmit.ctwa-subject')}}</td>
                              <td class="text-center">70%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn--mySecondary btn-block" data-dismiss="modal">{{$t('close')}}</button>
                      </div>
                    </div>
                  </div>
        </div>
    </div>
</template>